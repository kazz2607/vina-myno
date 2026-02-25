# Phương Án Xây Dựng Landing Page Myno Notes (NextJS)

> Dựa trên thiết kế layout trong `docs/layout/index.html` và `docs/layout/screen.png`

---

## Tổng Quan

**Mục tiêu**: Xây dựng landing page giới thiệu ứng dụng Myno Notes (ứng dụng ghi chú cross-platform cho macOS, Windows, Linux, iOS, Android) bằng NextJS với thiết kế hiện đại, hỗ trợ dark mode, và responsive.

**Tech Stack**:

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v3 (theo layout gốc)
- **Font**: Plus Jakarta Sans (từ Google Fonts)
- **Icons**: Material Icons Round + Material Symbols Outlined
- **Language**: TypeScript
- **Animations**: Framer Motion (cho micro-animations)
- **Theme**: next-themes (dark/light mode)

---

## Design System

### Bảng Màu (từ layout gốc)

| Token              | Giá trị   | Mô tả                 |
| ------------------ | --------- | --------------------- |
| `primary`          | `#F28C6E` | Cam đào - màu chủ đạo |
| `secondary`        | `#EA685E` | Đỏ cam - gradient     |
| `background-light` | `#FFF9F7` | Nền sáng              |
| `background-dark`  | `#1A1615` | Nền tối ấm            |
| `surface-light`    | `#FFFFFF` | Bề mặt card sáng      |
| `surface-dark`     | `#26201F` | Bề mặt card tối       |

### Typography

- **Font**: Plus Jakarta Sans (400, 500, 600, 700, 800)
- **Heading Display**: `font-extrabold`, `tracking-tight`
- **Body**: `leading-relaxed`

### Effects

- **Glassmorphism**: `backdrop-blur-xl`, semi-transparent
- **Gradient Hero**: `linear-gradient(135deg, #F28C6E 0%, #EA685E 100%)`
- **Grid Background**: subtle orange grid lines
- **Soft Vignette**: radial gradient overlay trên hero

---

## Cấu Trúc Dự Án

```
vina-notes-landing/
├── docs/
│   ├── layout/
│   │   ├── index.html
│   │   └── screen.png
│   └── LANDING_PAGE_PLAN.md          ← (file này)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                ← Root layout (font, theme provider)
│   │   ├── page.tsx                  ← Trang chính (ghép các sections)
│   │   └── globals.css               ← Global styles + Tailwind directives
│   │
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx            ← Thanh điều hướng
│       │   └── Footer.tsx            ← Footer
│       │
│       └── sections/
│           ├── HeroSection.tsx       ← Hero + app mockup
│           ├── FeaturesSection.tsx   ← 3 tính năng chính
│           ├── ThemesSection.tsx     ← Dark/Light mode preview
│           ├── SyncSection.tsx       ← Sync & Offline
│           ├── PricingSection.tsx    ← Bảng giá (Personal / Pro)
│           └── DownloadSection.tsx   ← CTA tải app các nền tảng
│
├── public/
│   └── (logo, app screenshots, etc.)
│
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Chi Tiết Từng Section

### 1. Navbar

- Logo (icon chỉnh 45°) + tên "Myno"
- Nav links: Features, Pricing, Download
- Nút toggle dark/light mode
- CTA button "Download" (ẩn trên mobile)
- **Sticky** + glassmorphism blur khi scroll

### 2. Hero Section (`/`)

- **Badge**: "v2.0 is now available" (animated pulse dot)
- **Headline**: "Capture Your Thoughts, Anywhere." với từ "Thoughts," gradient màu
- **Subtext**: mô tả ngắn về app
- **CTA Buttons**: "Download for Free" (gradient) + "Watch Demo" (outline)
- **Platform badges**: macOS ✓ Windows ✓ Linux (Beta) ✓
- **App Mockup**: giả lập UI app (glass panel, xoay nhẹ, hover thẳng)
  - Sidebar: Inbox, Favorites, Recent, Projects
  - Editor: title + content note

### 3. Features Section (`#features`)

- Label: "WHY MYNO NOTES"
- Title: "Designed for the modern thinker"
- **3 Feature Cards** (hover lift effect):
  1. **Instant Sync** 🔄 (blue) - Sync giữa Mac và Windows
  2. **Markdown Support** 📝 (purple) - CommonMark + live preview
  3. **Smart Organization** 📁 (orange) - Tags, categories, command palette

### 4. Themes Section

- Label: "Personalization"
- Title: "Beautiful Themes & Dark Mode"
- **Theme Swatches**: Light | Dark | OLED
- **Split Preview**: nửa trái Light Mode, nửa phải Dark Mode

### 5. Sync & Offline Section

- Icon cloud + Title: "Always in Sync & Available Offline"
- Danh sách features (✓):
  - End-to-end encryption
  - Conflict resolution
  - Local-first architecture
- **File Sync Preview**: danh sách file với trạng thái synced/syncing

### 6. Pricing Section (`#pricing`)

- Title: "Simple, transparent pricing"
- **2 Cards**:
  | Plan | Giá | Features |
  |---|---|---|
  | Personal | Free forever | Unlimited local notes, Basic markdown, Sync 2 devices, Dark mode |
  | Pro ⭐ | $4.99/month | Unlimited device sync, Export PDF/HTML/Docx, Version history 30 days, Priority support, Custom themes |
- Pro card có badge "Most Popular" + border primary

### 7. Download Section (`#download`)

- Title: "Available on all your devices"
- **5 Platforms**:
  | Platform | Download |
  |---|---|
  | iPhone & iPad | App Store button |
  | Android | Google Play button |
  | macOS | Mac App Store + `.dmg` fallback |
  | Windows 10/11 | Microsoft Store + `.exe` fallback |
  | Linux | Snap Store + AppImage |

### 8. Footer

- Logo + tên
- Social links: Twitter, GitHub
- Links: Privacy Policy, Terms of Service
- Copyright

---

## Animations & Interactions

| Element          | Animation                          |
| ---------------- | ---------------------------------- |
| Navbar           | Fade in từ top                     |
| Hero Headline    | Staggered words fade up            |
| App Mockup       | Rotate(-2deg) → hover 0deg, smooth |
| Feature Cards    | Hover: scale icon, lift shadow     |
| Theme Preview    | Fade/slide in khi scroll vào view  |
| Pricing Cards    | Hover: subtle lift                 |
| Download Buttons | Hover: scale + opacity             |
| Scroll Progress  | Framer Motion `useScroll`          |

---

## Kế Hoạch Triển Khai

### Bước 1: Khởi tạo dự án

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
npm install framer-motion next-themes
```

### Bước 2: Cài đặt Design System

- Cấu hình `tailwind.config.ts` với custom colors, fonts, gradients
- Tạo `globals.css` với CSS variables và base styles
- Cấu hình Google Fonts trong `layout.tsx`

### Bước 3: Build Components

- Thứ tự: Layout (Navbar, Footer) → Sections (theo thứ tự trang)
- Mỗi section là một React component độc lập

### Bước 4: Ghép trang & Test

- `page.tsx` import và xếp các sections
- Test responsive: mobile (375px), tablet (768px), desktop (1280px)
- Test dark mode toggle

### Bước 5: Tối ưu

- `next/image` cho tất cả ảnh
- `next/font` để load font nội bộ
- SEO meta tags trong `layout.tsx`
- Lighthouse score ≥ 90

---

## Checklist Xác Nhận

- [ ] Khởi tạo NextJS project trong `/Users/nguyentuan/Sites/localhost/vina-notes-landing`
- [ ] Cấu hình Tailwind với design tokens từ layout gốc
- [ ] Build Navbar (sticky, glassmorphism)
- [ ] Build Hero Section (mockup app, CTAs)
- [ ] Build Features Section (3 cards)
- [ ] Build Themes Section (split preview)
- [ ] Build Sync Section (file list mock)
- [ ] Build Pricing Section (2 tiers)
- [ ] Build Download Section (5 platforms)
- [ ] Build Footer
- [ ] Dark mode hoạt động đúng
- [ ] Responsive trên mobile/tablet/desktop
- [ ] Animations mượt mà
- [ ] SEO meta tags đầy đủ

---

_Phương án lập vào: 2026-02-25 | Dựa trên: `docs/layout/index.html`_
