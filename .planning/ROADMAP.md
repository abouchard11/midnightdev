# Roadmap: Midnight Dev Manus Migration

## Overview

Migrate Midnight Dev agency website from Manus platform to Railway. Replace Manus OAuth with Clerk, Manus notifications with Resend, and remove all unused Manus services. End state: fully independent app deployed on Railway.

## Domain Expertise

None (standard web app migration)

## Phases

- [x] **Phase 1: Cleanup** - Remove unused Manus features and dependencies
- [x] **Phase 2: Auth Migration** - Replace Manus OAuth with Clerk
- [ ] **Phase 3: Notifications** - Replace Manus notifications with Resend
- [ ] **Phase 4: Deployment** - Deploy to Railway and update DNS

## Phase Details

### Phase 1: Cleanup
**Goal**: Remove all unused Manus services and clean up vite.config.ts
**Depends on**: Nothing (first phase)
**Research**: Unlikely (simple file deletion)
**Plans**: 1 plan

Plans:
- [x] 01-01: Delete unused Manus service files and update configs

### Phase 2: Auth Migration
**Goal**: Replace Manus OAuth with Clerk authentication
**Depends on**: Phase 1
**Research**: Likely (Clerk SDK integration)
**Research topics**: Clerk Express middleware, React SDK hooks, user schema migration
**Plans**: 2 plans

Plans:
- [x] 02-01: Install Clerk and update server auth
- [x] 02-02: Update client auth hooks and components

### Phase 3: Notifications
**Goal**: Replace Manus notifications with Resend emails
**Depends on**: Phase 2
**Research**: Unlikely (simple API, templates exist)
**Plans**: 1 plan

Plans:
- [ ] 03-01: Replace notification.ts with Resend implementation

### Phase 4: Deployment
**Goal**: Deploy to Railway with MySQL and update DNS
**Depends on**: Phase 3
**Research**: Likely (Railway setup)
**Research topics**: Railway MySQL, environment variables, custom domain setup
**Plans**: 2 plans

Plans:
- [ ] 04-01: Create Railway project and configure database
- [ ] 04-02: Deploy app and update Cloudflare DNS

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Cleanup | 1/1 | Complete | 2026-01-25 |
| 2. Auth Migration | 2/2 | Complete | 2026-01-25 |
| 3. Notifications | 0/1 | Not started | - |
| 4. Deployment | 0/2 | Not started | - |
