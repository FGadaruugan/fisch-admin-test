# Admin Studio test setup

This repository is a separate test-site scaffold. It must not use the production Fisch Supabase project.

## Before enabling login
1. Create a separate Supabase staging project.
2. In `js/staging-config.js`, set only the staging project URL and its public publishable/anon key.
3. Deploy the Admin+ status endpoint to the staging Edge Function.
4. Configure the staging Google OAuth provider and allowlist this test site's Admin Studio URL as a redirect.
5. Configure the server-side `FISCH_ADMIN_USER_IDS` secret with verified staging Auth user UUIDs. Never authorize by Friend ID, browser role, localStorage, or URL parameters.
6. Test no-token, non-admin, missing-secret, and allowed-admin cases. Missing configuration must deny access.
7. Never put service-role keys, OAuth client secrets, or other secrets in Git.

## Current state
The page and visual shell are present, but authentication intentionally remains disabled until the separate staging backend is configured. No production mutation controls are included.
