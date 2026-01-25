import { TRPCError } from "@trpc/server";
import { Resend } from "resend";
import { ENV } from "./env";

export type NotificationPayload = {
  title: string;
  content: string;
};

const TITLE_MAX_LENGTH = 1200;
const CONTENT_MAX_LENGTH = 20000;

const trimValue = (value: string): string => value.trim();
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const validatePayload = (input: NotificationPayload): NotificationPayload => {
  if (!isNonEmptyString(input.title)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification title is required.",
    });
  }
  if (!isNonEmptyString(input.content)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification content is required.",
    });
  }

  const title = trimValue(input.title);
  const content = trimValue(input.content);

  if (title.length > TITLE_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification title must be at most ${TITLE_MAX_LENGTH} characters.`,
    });
  }

  if (content.length > CONTENT_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification content must be at most ${CONTENT_MAX_LENGTH} characters.`,
    });
  }

  return { title, content };
};

/**
 * Convert markdown-style content to simple HTML for email
 */
function contentToHtml(content: string): string {
  return content
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

/**
 * Dispatches a notification email to the project owner via Resend.
 *
 * Returns `true` if sent successfully, `false` otherwise.
 */
export async function notifyOwner(
  payload: NotificationPayload
): Promise<boolean> {
  const { title, content } = validatePayload(payload);

  // Check for required env vars
  if (!ENV.resendApiKey || !ENV.ownerEmail) {
    console.warn(
      "[Notification] Missing RESEND_API_KEY or OWNER_EMAIL. Notification not sent:",
      { title, contentLength: content.length }
    );
    return false;
  }

  try {
    const resend = new Resend(ENV.resendApiKey);

    const { error } = await resend.emails.send({
      from: "Midnight Dev <notifications@midnightdev.dev>",
      to: ENV.ownerEmail,
      subject: title,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #000; font-family: 'Courier New', monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; border: 1px solid #333;">
          <tr>
            <td style="padding: 30px; border-bottom: 1px solid #333;">
              <h1 style="margin: 0; color: #a855f7; font-size: 20px; letter-spacing: 2px;">
                MIDNIGHT_DEV_
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 20px; color: #fff; font-size: 18px;">
                ${title}
              </h2>
              <div style="color: #ccc; line-height: 1.8; font-size: 14px;">
                ${contentToHtml(content)}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 30px; border-top: 1px solid #333; background-color: #050505;">
              <p style="margin: 0; color: #666; font-size: 12px;">
                Midnight Dev Notification System
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error("[Notification] Resend error:", error);
      return false;
    }

    console.log(`[Notification] Email sent: ${title}`);
    return true;
  } catch (err) {
    console.error("[Notification] Failed to send email:", err);
    return false;
  }
}
