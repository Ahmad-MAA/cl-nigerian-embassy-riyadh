# Next.js 14 App with App Router & Tailwind CSS

A modern, fully responsive web application built with Next.js 14, React 19, and Tailwind CSS. This project uses the latest App Router architecture and TypeScript for robust development.

## ✨ Features

- **Next.js 14** - The latest React framework with App Router
- **App Router** - Modern file-based routing with nested layouts
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Responsive Design** - Mobile-first approach with responsive components
- **Global Layout** - Persistent Header and Footer across all pages
- **Dark Mode** - Built-in dark mode support
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
app/
├── components/
│   ├── Header.tsx          # Responsive navigation header
│   └── Footer.tsx          # Global footer with links
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page
├── globals.css             # Global styles and Tailwind config
└── favicon.ico             # App icon
public/
├── next.svg                # Next.js logo
└── vercel.svg              # Vercel logo
package.json                # Project dependencies
tailwind.config.ts          # Tailwind CSS configuration
tsconfig.json               # TypeScript configuration
next.config.ts              # Next.js configuration
postcss.config.mjs          # PostCSS configuration
```

## 🚀 Getting Started

### Installation

1. **Navigate to the project directory** (if not already there):
   ```bash
   cd cl_nigerian_embassy_riyadh
   ```

2. **Install dependencies** (already done, but for reference):
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🎨 Key Components

### Header (`app/components/Header.tsx`)
- Sticky navigation bar
- Responsive mobile menu icon
- Dark mode support
- Navigation links (Home, About, Services, Contact)

### Footer (`app/components/Footer.tsx`)
- Four-column layout on desktop
- Single column on mobile
- Links to Quick Links, Services, and Contact info
- Bottom footer with copyright and policy links
- Fully responsive

### Layout (`app/layout.tsx`)
- Root layout with metadata
- Global font imports (Geist Sans & Geist Mono)
- Flexible column structure (Header, Main, Footer)
- TypeScript support

### Home Page (`app/page.tsx`)
- **Hero Section** - Welcome message with CTA buttons
- **Features Section** - Three feature cards with icons
- **CTA Section** - Call-to-action with gradient background
- Full responsive design

## 💻 Responsive Breakpoints

Using Tailwind's responsive prefixes:

- **`sm`** - Small screens (640px and up)
- **`md`** - Medium screens (768px and up)
- **`lg`** - Large screens (1024px and up)
- **`xl`** - Extra large screens (1280px and up)

Example usage:
```tsx
<div className="text-2xl md:text-3xl lg:text-4xl">
  Responsive Text
</div>
```

## 🎯 Tailwind CSS Customization

The project uses the default Tailwind CSS configuration. To customize:

1. Edit `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

2. Import custom fonts in `app/globals.css`:
```css
@import "tailwindcss";
/* Your custom styles */
```

## 🔧 Configuration Files

### `tsconfig.json`
- TypeScript configuration
- Path aliases (`@/*` for `app/`)
- Strict type checking enabled

### `next.config.ts`
- Next.js configuration
- Build optimization settings

### `tailwind.config.ts`
- Tailwind CSS theme
- Content paths for purging

### `postcss.config.mjs`
- PostCSS plugins (Tailwind)

## 🌙 Dark Mode

Dark mode support is built-in with Tailwind CSS. Add the `dark:` prefix to any class:

```tsx
<div className="bg-white dark:bg-gray-900">
  <!-- White in light mode, dark gray in dark mode -->
</div>
```

## 📱 Mobile-First Development

This project follows a mobile-first approach:

```tsx
<div className="px-4 md:px-6 lg:px-8">
  <!-- Base: mobile sizing, md: tablet, lg: desktop -->
</div>
```

## 🔐 Type Safety

Full TypeScript support ensures type safety throughout the project:

```typescript
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
```

## 📦 Dependencies

- **next**: ^16.2.4
- **react**: ^19.0.0
- **react-dom**: ^19.0.0
- **typescript**: ^5.x
- **tailwindcss**: ^4.x
- **@types/node**: ^20.x
- **@types/react**: ^19.x
- **@types/react-dom**: ^19.x
- **eslint**: Latest
- **eslint-config-next**: Latest

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel automatically detects Next.js and configures the build
5. Click Deploy

### Deploy to Other Platforms

The project can be deployed to any Node.js hosting platform:

```bash
npm run build
npm start
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Feel free to customize and extend this project with your own features!

## 📄 License

Open source - feel free to use for your projects.

---

**Happy Coding! 🎉**
