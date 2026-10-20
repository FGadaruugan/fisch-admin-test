# Fisch 1.0.0 Roadmap

This roadmap tracks the first stable test release of Fisch Admin Test. The production repository remains separate; changes here must be verified before any production release.

## Milestone 1 — Stable baseline

- [ ] Confirm the GitHub Pages deployment serves the latest commit.
- [ ] Verify the game entry point and all local JavaScript chunks load without 404 errors.
- [ ] Verify the service worker does not keep an obsolete bundle cached.
- [ ] Run the repository checks and record any remaining failures.
- [ ] Test the main page on mobile and desktop.

## Milestone 2 — Game information and setup

- [ ] Show the current game/build version clearly.
- [ ] Add a concise network/connection status view with actionable error messages.
- [ ] Explain required setup steps before starting the game.
- [ ] Make core resource download/setup status visible; do not claim completion until verified.

## Milestone 3 — Admin Studio safety

- [ ] Keep Admin Studio separate from the public game entry point.
- [ ] Verify authentication and authorization on the server before enabling privileged actions.
- [ ] Use a separate staging backend for tests.
- [ ] Never expose service-role keys or other secrets in browser code or GitHub Pages.

## Release gate for 1.0.0

A milestone is not complete just because a workflow is green. The deployed page must also be checked in a browser, local assets must resolve, and the user-facing features must be exercised. Do not publish a production release until the stability checks pass.

## Change log

### 1.0.0 — Initial test baseline

- Established the isolated test repository and version baseline.
- Restored runtime chunks missing from the test copy.
- Began tracking verification and release criteria here.
