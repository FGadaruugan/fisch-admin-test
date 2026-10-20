# Fisch 1.0.0 — Test Environment

This repository is the isolated test copy of the current Fisch game source from `FGadaruugan/fisch`.

## Entry points

- Game: https://fgadaruugan.github.io/fisch-admin-test/
- Admin Studio test page: https://fgadaruugan.github.io/fisch-admin-test/admin.html

## 1.0.0 baseline

- Copied the current HTML, CSS, JavaScript modules, assets, resource manifest, service worker, and Supabase function/schema source.
- Set the game release metadata and package version to `1.0.0`.
- This repository is for testing changes before any separate production release.
- Production repository `FGadaruugan/fisch` was not modified by this copy operation.

## Backend safety

Copying backend source files does not deploy them to Supabase or connect them to a staging project. Before testing live account or admin actions, configure a separate staging Supabase project and review all environment settings. Never put a service-role or secret key in browser code or GitHub Pages.

## Admin Studio

The Admin Studio page is kept separate from the game entry point. Its current authentication/backend state must be verified separately; do not treat the local demo as a server-authenticated admin console.
