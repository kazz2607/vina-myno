# Changelog — Myno Notes Landing Page

All notable changes to this project are documented here.

---

## [1.1.0] - 2026-02-25

### Fixed

- Removed `fixed inset-0` overlay inside `HeroSection` that caused z-index conflicts and full-page repaint
- Removed `backdrop-filter: blur(12px)` from `.glass-panel` (applied to large areas → heavy GPU paint)
- Reduced glow decorators from `blur-[100px]` / `blur-[80px]` → `blur-3xl` / `blur-2xl`
- Replaced `animate-spin` with CSS `will-change: transform` animation (GPU-composited, no layout thrash)
- Removed duplicate `style={{ rotate: -2 }}` conflicting with Framer Motion `initial` prop

### Changed

- `.glass-panel` now uses solid semi-transparent background instead of `backdrop-filter`
- Added `.navbar-glass` class — only the navbar retains `backdrop-filter: blur(8px)` (small fixed element, acceptable cost)
- Moved Google Font `@import` out of CSS (was blocking render)

### Added

- `animate-slow-spin` CSS utility class with `will-change: transform`

---

## [1.0.0] - 2026-02-25

### Added

- Initial NextJS 14 project setup with App Router
- Tailwind CSS design system with custom color palette (primary `#F28C6E`, secondary `#EA685E`)
- **Navbar**: Sticky, glassmorphism on scroll, dark mode toggle, logo + nav links
- **HeroSection**: Animated headline, app mockup (sidebar + editor), CTA buttons, platform badges
- **FeaturesSection**: 3 feature cards (Instant Sync, Markdown, Smart Organization) + badges row
- **ThemesSection**: Split-screen Light/Dark/OLED theme preview
- **SyncSection**: File list mock with synced/syncing states, cloud storage progress
- **PricingSection**: Free and Pro tier cards with feature lists
- **DownloadSection**: Platform cards for iOS, Android, macOS, Windows, Linux
- **Footer**: Logo, social links (Twitter, GitHub), Privacy Policy, Terms of Service
- Dark/light mode via `next-themes`
- Animations via `framer-motion` (entrance, scroll-triggered, hover)
- SVG logo with gradient pencil icon in Navbar and Footer
