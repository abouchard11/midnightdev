---
title: Verify no pricing/audit remnants
date: 2026-05-01
priority: low
---

The old site sold a $497 "Signal Check" AI visibility audit. The rebuild removed all that code, but verify nothing references pricing, Stripe checkout, or the audit product.

Check:
- No /pricing or /audit routes exist
- No Stripe keys in env
- No pricing copy in any component
- Services section positions as "platform development" not "AI marketing"
- Contact CTA is email-only, no checkout flow
