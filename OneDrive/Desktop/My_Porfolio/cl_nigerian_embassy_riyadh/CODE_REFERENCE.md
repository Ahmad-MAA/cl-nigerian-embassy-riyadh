# 📄 Key Files Reference

## Quick Code Preview

This document provides quick reference to the key files in your Next.js 14 project.

---

## 1️⃣ app/layout.tsx (Root Layout)

**Purpose**: Main layout wrapper for all pages, includes Header & Footer

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js 14 App",
  description: "Modern Next.js 14 app with App Router and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Key Points:**
- Uses React Server Components (default in Next.js 14)
- Imports Geist fonts from Google
- Metadata for SEO
- Flexible layout: Header → Main → Footer

---

## 2️⃣ app/page.tsx (Home Page)

**Purpose**: Homepage with hero, features, and CTA sections

**Structure:**
- Hero Section (with image placeholder)
- Features Section (3 cards)
- CTA Section (call-to-action)

**Responsive Classes:**
- `text-4xl md:text-5xl lg:text-6xl` - Responsive text
- `flex-col md:flex-row` - Stack on mobile, row on desktop
- `grid grid-cols-1 md:grid-cols-3` - 1 column mobile, 3 on desktop
- `hidden md:flex` - Hidden on mobile
- `dark:` prefix - Dark mode support

---

## 3️⃣ app/components/Header.tsx

**Purpose**: Sticky responsive navigation header

**Features:**
```typescript
✅ Sticky positioning (sticky top-0 z-50)
✅ Logo/branding area
✅ Desktop navigation menu
✅ Mobile hamburger icon
✅ Dark mode support
✅ Responsive layout (md: breakpoint)
```

**Responsive Classes:**
```
hidden md:flex     → Desktop menu (hidden on mobile)
md:hidden          → Mobile menu button (hidden on desktop)
```

**Dark Mode:**
```
dark:bg-gray-900
dark:text-white
dark:border-gray-800
```

---

## 4️⃣ app/components/Footer.tsx

**Purpose**: Global footer with multiple sections

**Sections:**
1. Company info
2. Quick links
3. Services
4. Contact information

**Responsive Layout:**
```
Desktop (md+):  4 columns
Tablet (sm):    2 columns
Mobile:         1 column
```

**Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {/* Automatically stacks on mobile */}
</div>
```

---

## 5️⃣ app/globals.css (Global Styles)

**Purpose**: Global Tailwind CSS setup and theming

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

**Features:**
- Tailwind CSS import
- Custom CSS variables
- Dark mode theme
- Font configuration
- Body styling

---

## 🎨 Responsive Design Patterns

### Pattern 1: Text Sizing
```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
```

### Pattern 2: Spacing
```tsx
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  Responsive padding
</div>
```

### Pattern 3: Flex Layout
```tsx
<div className="flex flex-col md:flex-row gap-8">
  {/* Stacks on mobile, row on desktop */}
</div>
```

### Pattern 4: Grid Layout
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* 1 col mobile, 2 tablet, 4 desktop */}
</div>
```

### Pattern 5: Visibility
```tsx
<div className="hidden md:block">
  Visible only on md and up
</div>

<button className="md:hidden">
  Mobile menu
</button>
```

### Pattern 6: Dark Mode
```tsx
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">
    Content
  </p>
</div>
```

---

## 📦 Configuration Files

### tailwind.config.ts
```typescript
Tailwind CSS configuration
- Content paths for purging
- Theme customization
- Plugin configuration
```

### tsconfig.json
```json
TypeScript configuration
- Strict mode
- JSX: React 19
- Path aliases: @/*
- Module: ESNext
```

### next.config.ts
```typescript
Next.js configuration
- Build optimization
- Image configuration
- Middleware setup
```

### postcss.config.mjs
```javascript
PostCSS configuration
- Tailwind CSS plugin
- Autoprefixer
```

---

## 🚀 Common Customizations

### Change Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
      secondary: "#your-color",
    },
  },
}
```

### Change Fonts
Edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";

const font = YourFont({ subsets: ["latin"] });

// Use: className={`${font.variable}`}
```

### Add New Route
```
app/about/page.tsx  →  /about
app/blog/[slug]/page.tsx  →  /blog/:slug
```

### Add New Component
```typescript
// app/components/Card.tsx
export default function Card() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      Card content
    </div>
  );
}

// Use in page.tsx
import Card from "@/components/Card";
```

---

## 💡 Pro Tips

### Tip 1: Use Path Aliases
```typescript
// ✅ Good
import Button from "@/components/Button";

// ❌ Avoid
import Button from "../../components/Button";
```

### Tip 2: Combine Responsive Classes
```typescript
className="text-sm sm:text-base md:text-lg lg:text-xl"
```

### Tip 3: Use Group for Parent-Child Interactions
```tsx
<div className="group border hover:bg-blue-50">
  <h3 className="group-hover:text-blue-600">Title</h3>
  <p className="group-hover:text-blue-400">Description</p>
</div>
```

### Tip 4: Dark Mode Fallback
```tsx
className="bg-gray-100 dark:bg-gray-900"
```

### Tip 5: Reuse Tailwind Classes
```tsx
const buttonClass = "px-4 py-2 rounded-lg font-semibold transition-colors";

<button className={`${buttonClass} bg-blue-600 hover:bg-blue-700`}>
  Click me
</button>
```

---

## 🎯 Breakpoint Quick Reference

```
Default (mobile-first)  < 640px
sm                      640px
md                      768px   ← Most common for responsive
lg                      1024px
xl                      1280px
2xl                     1536px
```

---

## ✨ Features Checklist

✅ **Mobile Responsive**: All components adapt to screen size  
✅ **Dark Mode**: Built-in light/dark support  
✅ **TypeScript**: Full type safety  
✅ **Tailwind CSS**: Utility-first styling  
✅ **Next.js 14**: Latest App Router  
✅ **Performance**: Optimized builds  
✅ **SEO**: Metadata support  
✅ **Fonts**: Google Fonts integrated  

---

## 📱 Testing Responsive Design

### Option 1: Browser DevTools
1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Select device or dimensions

### Option 2: Manual Testing
- Mobile: 375px width
- Tablet: 768px width
- Desktop: 1024px+ width

### Breakpoints to Test:
- 320px (small phone)
- 640px (large phone)
- 768px (tablet)
- 1024px (laptop)
- 1280px (desktop)

---

**Reference these snippets while developing your Next.js app!** 🚀
