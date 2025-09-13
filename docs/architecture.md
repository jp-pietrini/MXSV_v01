# Architecture Brief

## Quick Onboarding Guide
This document serves as a technical onboarding brief for engineers joining the MXSV landing page project.

## Tech Stack Overview

### Core Framework
- **Next.js 14+** (App Router) - React framework with SSR/SSG
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Performant animations

### Supporting Libraries
- **Lucide React** - Icon library
- **next-intl** - Internationalization (en/es)
- **clsx** + **tailwind-merge** - Conditional class handling

### Future Stack (Stage 3+)
- **Neon PostgreSQL** - Primary database
- **Prisma ORM** - Database toolkit
- **Cloudflare R2** - Object storage
- **Stripe** - Payments processing
- **Resend** - Email delivery

## Project Structure

```
/mxsv-landing/
├── /src/
│   ├── /app/                    # Next.js App Router
│   │   ├── /[locale]/          # i18n routing (en|es)
│   │   │   ├── /admin/         # Admin panel pages
│   │   │   ├── /experiments/   # Variant switcher
│   │   │   ├── layout.tsx      # Layout per locale
│   │   │   └── page.tsx        # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── not-found.tsx       # 404 page
│   │
│   ├── /components/
│   │   ├── /ui/                # Shared primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── ...
│   │   ├── /sections/          # Page sections
│   │   │   ├── /hero/
│   │   │   │   ├── /variant-a/
│   │   │   │   ├── /variant-b/
│   │   │   │   └── /variant-c/
│   │   │   ├── /about/
│   │   │   ├── /agenda/
│   │   │   └── ...
│   │   └── /layouts/           # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Navigation.tsx
│   │
│   ├── /lib/                   # Utilities and configs
│   │   ├── theme.ts           # Theme configuration
│   │   ├── utils.ts           # General utilities
│   │   ├── constants.ts       # App constants
│   │   └── validations.ts     # Zod schemas
│   │
│   ├── /data/                  # Static data (Stage 1-2)
│   │   ├── speakers.json
│   │   ├── sponsors.json
│   │   ├── agenda.json
│   │   ├── tickets.json
│   │   └── ...
│   │
│   ├── /locales/               # i18n dictionaries
│   │   ├── en.json
│   │   └── es.json
│   │
│   ├── /styles/                # Global styles
│   │   ├── tokens.css         # Design tokens
│   │   └── components.css     # Component-specific
│   │
│   └── /types/                 # TypeScript definitions
│       ├── global.d.ts
│       └── api.ts
│
├── /docs/                      # Documentation
├── /public/                    # Static assets
└── /prisma/                    # Database (Stage 3+)
```

## Key Directories Explained

### `/src/components/ui/`
**Purpose:** Reusable UI primitives shared across all variants
**Examples:** Button, Card, Input, Modal, Badge, SectionHeader
**Naming:** PascalCase (e.g., `ButtonGroup.tsx`)
**Location for:** Atoms and molecules in atomic design

### `/src/components/sections/`
**Purpose:** Page section implementations by variant
**Structure:** `/{section-name}/{variant-name}/index.tsx`
**Examples:**
- `/hero/variant-a/index.tsx`
- `/about/variant-b/index.tsx`
**Location for:** Organisms in atomic design

### `/src/lib/`
**Purpose:** Application utilities and configurations
**Key files:**
- `theme.ts` - Theme switching and configuration
- `utils.ts` - General utility functions
- `constants.ts` - App-wide constants

### `/src/data/` (Stages 1-2 only)
**Purpose:** Static JSON data for UI development
**Replaced by:** Database calls in Stage 3+
**Examples:** Speaker bios, sponsor logos, event schedule

## Routing Strategy

### App Router Structure
```
/                          # Home (Variant A)
/en                        # English home
/es                        # Spanish home
/en/experiments            # Variant switcher (EN)
/es/experiments            # Variant switcher (ES)
/en/admin                  # Admin panel (EN)
/es/admin                  # Admin panel (ES)
```

### Internationalization
- Default locale: `en`
- Supported locales: `en`, `es`
- URL strategy: Prefix except default
- Dictionary loading: Static JSON files

## Component Architecture

### UI Primitive Example
```tsx
// /src/components/ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    />
  );
}
```

### Section Component Example
```tsx
// /src/components/sections/hero/variant-a/index.tsx
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function HeroVariantA() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        {/* Hero content */}
      </Container>
    </section>
  );
}
```

## Styling System

### Tailwind Configuration
Located in `tailwind.config.ts` with custom tokens:
- Extended color palette
- Custom spacing scale
- Typography configurations
- Animation variants

### CSS Organization
1. **Global styles** (`/src/app/globals.css`)
2. **Design tokens** (`/src/styles/tokens.css`)
3. **Component styles** (Tailwind classes)
4. **Utility classes** (`/src/styles/utils.css`)

### Theme System
```tsx
// /src/lib/theme.ts
export const theme = {
  colors: {
    brand: {
      primary: '#0066FF',
      secondary: '#F0F0F0',
    },
  },
  spacing: {
    section: '5rem',
    container: '2rem',
  },
};
```

## Data Layer (Current: Static)

### Static Data Pattern (Stages 1-2)
```tsx
// /src/data/speakers.json
[
  {
    "id": "speaker-1",
    "name": "Maria Rodriguez",
    "title": "CEO",
    "company": "TechMX",
    "bio": "...",
    "image": "/images/speakers/maria.jpg",
    "linkedin": "https://linkedin.com/in/maria",
    "order": 1
  }
]

// Usage in component
import speakersData from '@/data/speakers.json';
```

## Database Schema (Stage 3+)

### Prisma Models
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model InterestForm {
  id           String   @id @default(cuid())
  fullName     String
  email        String   @unique
  organization String
  interestType String
  comments     String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  @@map("interest_forms")
}

model Ticket {
  id          String   @id @default(cuid())
  tier        String   // "early-bird", "regular", "vip"
  name        String
  description String?
  price       Float
  quantity    Int
  sold        Int      @default(0)
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("tickets")
}

model Product {
  id          String   @id @default(cuid())
  name        String
  description String?
  type        String   // "tshirt", "hoodie", "mug", etc.
  price       Float
  image       String
  images      String[] // Additional product images
  sizes       String[] // Available sizes
  colors      String[] // Available colors
  stock       Int
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("products")
}

model Speaker {
  id        String   @id @default(cuid())
  name      String
  title     String
  company   String
  bio       String
  image     String
  linkedin  String?
  twitter   String?
  website   String?
  order     Int      @default(0)
  isVisible Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("speakers")
}

model Sponsor {
  id        String   @id @default(cuid())
  name      String
  tier      String   // "platinum", "gold", "silver", "bronze"
  logo      String
  website   String?
  order     Int      @default(0)
  isVisible Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("sponsors")
}

model Section {
  id        String  @id @default(cuid())
  name      String  @unique // "hero", "about", "speakers", etc.
  isVisible Boolean @default(true)
  order     Int     @default(0)
  updatedAt DateTime @updatedAt

  @@map("sections")
}

model AgendaItem {
  id          String   @id @default(cuid())
  title       String
  description String?
  startTime   DateTime
  endTime     DateTime
  location    String?
  type        String   // "workshop", "panel", "networking", etc.
  speakers    String[] // Speaker IDs
  order       Int      @default(0)
  isVisible   Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("agenda_items")
}

model Settings {
  id          String   @id @default(cuid())
  key         String   @unique
  value       String
  description String?
  updatedAt   DateTime @updatedAt

  @@map("settings")
}
```

## Environment Variables

### Stage 1-2 (Frontend Only)
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
NODE_ENV=development
```

### Stage 3+ (Full Stack)
```bash
# Database
DATABASE_URL=postgresql://user:pass@host/db

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email
RESEND_API_KEY=re_...

# Storage
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=mxsv-assets

# Admin
ADMIN_KEY=Arbol2026

# Analytics
NEXT_PUBLIC_GA_ID=G-...

# Site
NEXT_PUBLIC_SITE_URL=https://mxsv.com
```

## Build & Development

### NPM Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "typecheck": "tsc --noEmit",
    "db:push": "prisma db push",
    "db:studio": "prisma studio",
    "db:generate": "prisma generate",
    "test": "jest",
    "test:watch": "jest --watch",
    "e2e": "playwright test"
  }
}
```

### Development Workflow
1. **Start dev server:** `npm run dev`
2. **Type checking:** `npm run typecheck`
3. **Linting:** `npm run lint`
4. **Build:** `npm run build`

## Performance Considerations

### Bundle Analysis
- Use `@next/bundle-analyzer` for monitoring
- Target: <200KB initial bundle
- Code splitting by variant

### Image Optimization
- Use Next.js Image component
- WebP format with fallbacks
- Responsive sizing
- Lazy loading by default

### Loading Strategies
- Server components by default
- Client components only when needed
- Streaming for slow components
- Progressive enhancement

## Testing Strategy (Stage 3+)

### Unit Tests (Jest + RTL)
- Component behavior testing
- Utility function testing
- Custom hook testing

### Integration Tests
- API route testing
- Database integration
- Third-party service mocking

### E2E Tests (Playwright)
- Critical user flows
- Cross-browser testing
- Mobile testing

## State Management

### Current (Stages 1-2)
- React state for UI interactions
- URL state for routing
- localStorage for preferences

### Future (Stage 3+)
- Server state with React Query
- Form state with React Hook Form
- Global state with Zustand (if needed)

## Deployment Strategy

### Staging (Render + Neon)
- Database: Neon PostgreSQL
- Hosting: Render web service
- Storage: Cloudflare R2
- DNS: Cloudflare

### Production
- Same stack as staging
- CDN optimization
- Performance monitoring
- Error tracking (Sentry)

## Security Considerations

### Frontend Security
- CSP headers configured
- No inline scripts
- Secure cookie settings
- Input sanitization

### API Security (Stage 3+)
- Rate limiting
- Request validation (Zod)
- Authentication checks
- CORS configuration

## Monitoring & Analytics

### Performance
- Core Web Vitals tracking
- Lighthouse CI integration
- Bundle size monitoring

### Business Metrics
- Google Analytics
- Conversion tracking
- A/B test analytics

## Development Notes

### Component Conventions
- Props interfaces end with `Props`
- Use `className` prop for styling overrides
- Export named components (not default)
- Prefer composition over configuration

### File Naming
- Components: PascalCase (`ButtonGroup.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- Constants: SNAKE_CASE (`API_ENDPOINTS.ts`)

### Code Organization
- Group related functionality
- Keep components focused and small
- Use barrel exports for clean imports
- Document complex logic

This architecture supports rapid development while maintaining scalability for future enhancements.