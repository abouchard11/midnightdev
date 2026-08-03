import { NextResponse } from "next/server";

const INTERACTIVE_CASE_FILE =
  "https://alex-ai-engineer-portfolio.amb1122.chatgpt.site/";

export function GET() {
  return NextResponse.redirect(INTERACTIVE_CASE_FILE, 307);
}
