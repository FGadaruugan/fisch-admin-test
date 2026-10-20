# Fisch 1.0.0 — Major Update Specification

This is the implementation checklist for the isolated `fisch-admin-test` project. The production `fisch` site remains untouched until the test build passes.

## Confirmed design direction

- **Release:** Fisch V1.0.0 major update.
- **Visual system:** ColorOS 3, replacing the current blue accent with a crimson/red theme.
- **Motion:** richer lobby, button, panel, catch, and navigation animations. Respect `prefers-reduced-motion` and avoid heavy continuous effects on mobile.
- **Game modes/settings:** FSFS, Fs, ColorOS, new animation controls, and Auto Catch should be brought to version 3. Their exact names and compatibility rules must follow the existing settings model, not be duplicated as disconnected toggles.
- **Navigation:** Lobby, Backpack, Profile, Settings, Top 30, map/islands, rod shop, and inventory remain first-class entry points.
- **Resources:** separate resource groups for animation, fish/rods/items, map, important systems, and lobby. Existing Core / Extended / Full tiers remain available while the new groups are introduced.

## Content targets

### Islands and fish
- Existing collection baseline: 30 fish.
- Target collection: 100 fish (+70 new entries).
- Add 3 new islands; preserve existing islands and progression.
- Final island target: 60 fish.
- Add a new **King** rarity/category with at least one King fish.
- Fish entries must include stable ID, display name, island/biome, rarity, weight range, sell value, catch conditions, and icon/model reference.
- Do not count placeholder or duplicate fish toward the 100-fish target.

### Fishing rods
- Existing baseline: 6 rods described as 5 Normal rods and 1 Rare/secret rod.
- Add 10 rods: 7 Rare and 3 Legendary.
- Keep rod stats data-driven. The requested King rod Luck / kg behavior needs a precise rule before implementation; do not silently apply King-only bonuses to every rod.
- Legendary and higher-tier size-related effects should be implemented as explicit, testable modifiers rather than scattered special cases.

### Player features
- Backpack: separate Tools, Fish, Items, and other small/utility items; show counts and capacity.
- Profile: identity, level/XP, catch totals, discovered collection, and equipped rod.
- Top 30: leaderboard UI must clearly distinguish local/demo data from real online rankings.
- Settings: graphics/performance, animation intensity, Auto Catch, ColorOS/theme, and network/resource status.

## Resource groups and setup

- `animation`: animation presets, transitions, catch effects.
- `fish-rods-items`: catalogue data and related assets.
- `map`: island/map assets and navigation metadata.
- `important-system`: core runtime, save/load, inventory, progression, fishing.
- `lobby`: lobby-only visuals and menu assets.
- Keep the current `core`, `extended`, and `full` resource tiers working during migration.
- Every downloadable resource needs a version/hash, visible progress, retry/error state, and a clear required/optional label. Never show “complete” before integrity validation succeeds.

## Delivery order

1. **Visual foundation (in progress):** ColorOS 3 red theme, release label, safe motion, mobile/reduced-motion fallback.
2. **Stability gate:** ensure deployment commit, local chunks, PWA/service worker cache, resource manifest and mobile layout work.
3. **Content data model:** rarity enum, 100 unique fish entries, 16 rods, three additional island definitions; validate counts and references in automated tests.
4. **Backpack/Profile/Top 30/Settings:** wire each panel to actual game state; avoid fake online data.
5. **Resource manager:** add named groups with hashes, progress, retry, and offline behavior.
6. **Fishing balance:** implement rod Luck / kg / size effects with tests and explain the King rule.
7. **Release candidate:** mobile and desktop smoke tests, no missing asset requests, no console boot errors, regression suite green.

## Open rules to confirm before balancing

- The note “8 pcs ???” for the final island is unresolved; do not invent what the number 8 represents.
- Confirm whether “King” is a fish rarity, a rod tier, or both. This specification currently treats it as a fish category and leaves the King rod behavior as a separate balance rule.
- Confirm the exact meaning of “King rod Luck, kg” and which Legendary+ size effects should apply.
- Online Top 30 and cross-device accounts require a properly configured staging backend; static GitHub Pages alone cannot provide secure privileged operations.

## Release safety

- Work only in `FGadaruugan/fisch-admin-test` during development.
- Never put service-role keys in browser code or static assets.
- A green workflow is necessary but not sufficient: test the deployed game in a real browser before calling a feature complete.
