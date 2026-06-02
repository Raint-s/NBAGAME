# Release Checklist

Use this checklist before any public release, preview build, or store submission.

## 1. Repository Hygiene

- [ ] `git status` is understood
- [ ] no private local-only assets are staged
- [ ] no personal scripts, prompts, or research notes are included
- [ ] no temporary logs or machine-specific files are included

## 2. App Verification

- [ ] the web game launches locally
- [ ] core game flow works at least once
- [ ] no obvious console-breaking errors remain
- [ ] save/load behavior was sanity-checked if touched

## 3. Web / PWA Checks

- [ ] `manifest.webmanifest` is up to date
- [ ] `sw.js` behavior was checked after recent asset changes
- [ ] icons referenced by the app are present
- [ ] cache-sensitive files were reviewed when shipping updates

## 4. Capacitor / Android Checks

- [ ] `npm run www` succeeds
- [ ] `npm run sync` succeeds
- [ ] Android project opens correctly when needed
- [ ] debug/release target is explicitly chosen
- [ ] signing setup is verified for release builds

## 5. Product Surface

- [ ] version / release notes are accurate
- [ ] obvious placeholder content is removed
- [ ] pricing, rewards, and event data were sanity-checked if changed
- [ ] user-facing text changed in this release was reviewed

## 6. Final Review

- [ ] diff was reviewed one more time before push
- [ ] commit messages are understandable
- [ ] docs changed with the implementation where needed
- [ ] project status and changelog reflect the current release state
- [ ] release artifacts come from the intended branch
