---
title: Deploy to Vercel
date: 2026-05-01
priority: high
---

Connect the abouchard11/midnightdev GitHub repo to Vercel. Configure the midnightdev.dev domain. Deploy the Next.js App Router build.

Steps:
- `vercel link` or connect via Vercel dashboard
- Configure midnightdev.dev domain (already in Vercel from the old deployment)
- Verify build passes on Vercel (confirmed locally: `pnpm build` clean)
- Remove railway.toml from repo (already done)
- Delete the Railway project from railway.com dashboard (project: easygoing-nourishment)
