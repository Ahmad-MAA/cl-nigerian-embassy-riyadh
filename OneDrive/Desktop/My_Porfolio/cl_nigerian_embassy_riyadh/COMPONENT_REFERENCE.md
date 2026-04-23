# Component Reference Guide - Nigerian Embassy Website

## Quick Component Usage

### 1. MainLayout Component

**Purpose:** Reusable wrapper for all pages with breadcrumbs, titles, and descriptions

**Location:** `app/components/MainLayout.tsx`

**Basic Usage:**
```typescript
import MainLayout from "@/components/MainLayout";

export default function MyPage() {
  return (
    <MainLayout>
      {/* Your page content */}
    </MainLayout>
  );
}
```

**With Breadcrumbs:**
```typescript
<MainLayout
  breadcrumbs={[
    { label: "Services", href: "/services" },
    { label: "Visa", active: true }
  ]}
>
  {/* Content */}
</MainLayout>
```

**With Title & Description:**
```typescript
<MainLayout
  title="Visa Services"
  description="Learn about our visa application process"
  breadcrumbs={[
    { label: "Services", href: "/services" },
    { label: "Visa", active: true }
  ]}
>
  {/* Content */}
</MainLayout>
```

**Props:**
- `children` (required): Page content
- `breadcrumbs` (optional): Array of breadcrumb items
- `title` (optional): Page heading
- `description` (optional): Page subtitle

---

### 2. Breadcrumb Component

**Purpose:** Navigation showing current page hierarchy

**Location:** `app/components/Breadcrumb.tsx`

**Basic Usage:**
```typescript
import Breadcrumb from "@/components/Breadcrumb";

<Breadcrumb items={[
  { label: "Services" },
  { label: "Visa", active: true }
]} />
```

**With Links:**
```typescript
<Breadcrumb items={[
  { label: "Services", href: "/services" },
  { label: "Visa", href: "/services/visa" },
  { label: "Tourist Visa", active: true }
]} />
```

**Item Properties:**
- `label` (required): Display text
- `href` (optional): Link URL
- `active` (optional): Mark as current page

---

### 3. Header Component

**Purpose:** Site-wide sticky navigation with official branding

**Location:** `app/components/Header.tsx`

**Features:**
- Green banner with "Official Website" notice
- Nigeria flag emoji (🇳🇬)
- Embassy name and location
- Navigation menu (desktop)
- Mobile hamburger button
- Sticky positioning
- Dark mode support

**Includes Navigation Links:**
- Home
- About
- Services
- News
- FAQ
- Contact (CTA button)

**To Customize Navigation:**
Edit `app/components/Header.tsx` in the navigation section:
```typescript
<a href="/about">About</a>
<a href="/services">Services</a>
// Add more as needed
```

---

### 4. Footer Component

**Purpose:** Site-wide footer with official information and links

**Location:** `app/components/Footer.tsx`

**Features:**
- Official website disclaimer
- Contact information:
  - Physical address
  - Phone number
  - Email
  - Business hours
- Quick links section
- Services section
- Bottom links:
  - Privacy Policy
  - Terms of Use
  - Sitemap
  - Accessibility

**To Update Contact Info:**
Edit the Contact Information section:
```typescript
<li>📍 Your Address Here</li>
<li>📞 Your Phone Number</li>
<li>📧 your.email@example.com</li>
<li>🕐 Your Business Hours</li>
```

---

## Page Structure Template

### Basic Page with All Components

```typescript
import MainLayout from "@/components/MainLayout";

export default function ServicesPage() {
  return (
    <MainLayout
      breadcrumbs={[
        { label: "Services", active: true }
      ]}
      title="Our Services"
      description="Services provided by the Nigerian Embassy Riyadh"
    >
      {/* Your page content goes here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Service Details
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Your content here
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
```

---

## Styling Patterns

### Card Component (Reusable)
```typescript
<div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
    Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400 text-sm">
    Description
  </p>
</div>
```

### Button - Primary (Green)
```typescript
<button className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors">
  Button Text
</button>
```

### Button - Secondary (Outlined)
```typescript
<button className="px-8 py-3 border-2 border-green-700 text-green-700 dark:text-green-400 dark:border-green-400 font-semibold rounded-lg hover:bg-green-50 dark:hover:bg-gray-700 transition-colors">
  Button Text
</button>
```

### Section Header
```typescript
<div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
    Section Title
  </h2>
  <p className="text-xl text-gray-600 dark:text-gray-400">
    Section description
  </p>
</div>
```

### Responsive Grid
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards go here - 1 col mobile, 2 tablet, 3 desktop */}
</div>
```

---

## Color Reference

### Primary Colors (Embassy Theme)
```
Green-700: #15803d (primary/buttons/links)
Green-400: #4ade80 (dark mode accents)
Green-50:  #f0fdf4 (light backgrounds)
Green-900: #166534 (dark mode primary)
```

### Text Colors
```
Gray-900: #111827 (dark text/light mode)
White:    #ffffff (light text/dark mode)
Gray-400: #9ca3af (muted text)
Gray-600: #4b5563 (secondary text)
```

### Backgrounds
```
White: #ffffff (light mode)
Gray-50: #f9fafb (light accent)
Gray-900: #111827 (dark mode)
Gray-950: #030712 (footer/dark)
```

---

## Creating a New Service Page

### Step 1: Create the Page File
```
app/services/visa/page.tsx
```

### Step 2: Use Template
```typescript
import MainLayout from "@/components/MainLayout";

export default function VisaPage() {
  return (
    <MainLayout
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Visa Services", active: true }
      ]}
      title="Visa Services"
      description="Apply for a Nigerian visa"
    >
      {/* Visa application content */}
    </MainLayout>
  );
}
```

### Step 3: Add Navigation Link
Edit `app/components/Header.tsx`:
```typescript
<a href="/services/visa" className="...">
  Visa
</a>
```

### Step 4: Add Footer Link (if needed)
Edit `app/components/Footer.tsx`:
```typescript
<a href="/services/visa" className="...">
  Visa Services
</a>
```

---

## Responsive Breakpoints Quick Reference

```
Mobile (default)    < 640px
sm                  640px+
md                  768px+   ← Most common for tablets
lg                  1024px+  ← Most common for desktops
xl                  1280px+
2xl                 1536px+
```

### Common Responsive Classes

```typescript
// Text sizing
text-base md:text-lg lg:text-xl

// Padding
px-4 md:px-6 lg:px-8

// Grid columns
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Flex direction
flex-col md:flex-row

// Display
hidden md:block  (hidden on mobile, visible on md+)
md:hidden        (visible on mobile, hidden on md+)
```

---

## Dark Mode Support

All components support dark mode with `dark:` prefix:

```typescript
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">
    Text that adjusts for dark mode
  </p>
</div>
```

---

## Common Tasks

### Add a New Navigation Link
1. Edit `app/components/Header.tsx`
2. Add `<a href="/path">Label</a>` in navigation section

### Update Official Information
1. Edit `app/components/Footer.tsx`
2. Update contact information in the Contact section

### Create a New Page
1. Create file in `app/` directory
2. Import `MainLayout` and `Breadcrumb`
3. Use template structure
4. Add navigation link in Header/Footer

### Change Colors
1. Edit `tailwind.config.ts`
2. Update color values in theme
3. Rebuild: `npm run build`

### Test on Mobile
1. Open browser DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Select iPhone or device
4. Test all interactions

---

## Troubleshooting

### Component Not Appearing
- Check import statement is correct
- Verify component file exists
- Check for TypeScript errors

### Styling Not Applied
- Ensure Tailwind classes are spelled correctly
- Check dark mode classes have `dark:` prefix
- Rebuild if needed: `npm run build`

### Navigation Not Working
- Verify href paths are correct
- Check file exists at target path
- Test in dev server: `npm run dev`

---

## Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs

---

**Component Documentation for Nigerian Embassy Riyadh Website**
