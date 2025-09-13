# MXSV 2026 Landing Page

A world-class landing page for Mexico in Silicon Valley conference featuring **Stripe-style design**, multiple UI variants, and comprehensive content management.

## 🎯 Project Overview

MXSV connects the innovation ecosystems of Mexico and Silicon Valley through a premier two-day conference at Stanford University (February 21-22, 2026). This landing page showcases three distinct design variants, all following Stripe-like design principles with clean aesthetics and subtle interactions.

## ✅ **Stage 0-1 COMPLETED** - Foundation & UI Variants

### 🏗️ Core Infrastructure
- **Next.js 14+** with App Router and TypeScript
- **Stripe-style Design System** with design tokens
- **Framer Motion** for subtle animations (≤200ms)
- **Three UI Variants** - Pure, Editorial, and Gradient approaches
- **Static Data Layer** for rapid development
- **Comprehensive Documentation** (`/docs/`)

### 🎨 Design Variants Implemented

#### **Variant A: Pure Stripe** ✅ (Default)
- Ultra-minimal design with 1-2px borders
- Soft shadows and generous white space
- Clean typography with restrained motion
- **Route**: `/` (home page)

#### **Variant B: Editorial Stripe** (Planned)
- Larger typography and enhanced imagery
- Editorial layouts for better content consumption
- **Route**: `/experiments/variant-b`

#### **Variant C: Gradient Accent** (Planned)
- Subtle gradient accents on white backgrounds
- Strategic color usage for visual interest
- **Route**: `/experiments/variant-c`

### 📱 Sections Completed (Variant A)
- **Hero Section** - Animated landing with CTAs
- **About Section** - Mission, vision, and stats
- **Agenda Section** - Interactive day selector
- **Speakers Section** - Keynotes and panelists
- **Sponsors Section** - Multi-tier partner showcase
- **Tickets Section** - Pricing with availability
- **FAQ Section** - Expandable Q&A by category
- **Contact Section** - Form with validation

## 🏗️ Database Schema

The application includes comprehensive models for:
- Interest forms and newsletter subscriptions
- Ticket tiers and merchandise products
- Speakers, sponsors, and team members
- FAQ items and agenda management
- Order processing and admin authentication
- Email templates and session management

## 🚀 Quick Start

```bash
# Clone and install
git clone <repository-url>
cd mxsv-landing
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### 🔧 Available Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # TypeScript validation
npm run clean      # Clean build artifacts
```

### 🌍 Key Routes

- **`/`** - Main site (Variant A - Pure Stripe)
- **`/experiments`** - Design variant comparison
- **`/admin`** - Content management panel (Key: `Arbol2026`)

### ⚙️ Environment Setup (Stage 3+)

For future backend integration:
```env
# Database (Stage 3+)
DATABASE_URL="postgresql://..."

# Payments (Stage 3+)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Email (Stage 3+)
RESEND_API_KEY="..."

# Admin Access
ADMIN_KEY="Arbol2026"
```

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#8b5cf6`
- **Accent Blue**: `#3b82f6`
- **Accent Teal**: `#14b8a6`
- **Dark Background**: `#0a0014`
- **Card Background**: `#1a0033`

### Animations
- Smooth scroll-triggered animations
- Particle background effects
- 3D card hover transformations
- Gradient text animations
- Floating elements

## 🌍 Internationalization

The site supports English (default) and Spanish with complete translations for:
- All UI text and navigation
- Section content and form labels
- Error messages and notifications
- SEO metadata

## 📱 Next Steps

### High Priority (Pending)
1. **Program/Agenda Section** - Interactive timeline
2. **Speakers Section** - 3D card grid with profiles
3. **Tickets Section** - Stripe payment integration
4. **Contact Form** - Interest registration with validation
5. **Admin Panel** - Content management system

### Medium Priority
1. **Sponsors Carousel** - Auto-scrolling partner logos
2. **Merchandise Store** - Product catalog with cart
3. **FAQ Section** - Accordion-style Q&A
4. **Team Section** - Meet the organizers

### Technical Enhancements
1. **Email Integration** - SendGrid/Resend setup
2. **SEO Optimization** - Structured data and meta tags
3. **Performance** - Image optimization and caching
4. **Testing** - E2E and unit tests

## 🔧 Technology Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion + tsParticles
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Stripe integration
- **i18n**: next-intl
- **Themes**: next-themes
- **Icons**: Lucide React

## 📂 Project Structure

```
mxsv-landing/
├── docs/                   # Comprehensive documentation
│   ├── claude.md          # Working agreement & DoD
│   ├── plan-milestones.md # Development roadmap
│   ├── moodboard.md       # Visual design principles
│   └── architecture.md    # Technical architecture
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── experiments/   # Variant comparison
│   │   ├── admin/         # Content management
│   │   ├── globals.css    # Stripe-style CSS
│   │   └── page.tsx       # Main landing (Variant A)
│   ├── components/
│   │   ├── layouts/       # Header, Footer
│   │   ├── sections/      # Hero, About, Agenda, etc.
│   │   │   └── {section}/
│   │   │       ├── variant-a/  # Pure Stripe style
│   │   │       ├── variant-b/  # Editorial style
│   │   │       └── variant-c/  # Gradient accent
│   │   └── ui/            # Reusable primitives
│   ├── data/              # Static JSON data
│   ├── lib/               # Utilities & themes
│   ├── locales/           # i18n dictionaries
│   └── styles/            # Design tokens
├── data/                  # Conference data
└── locales/               # Translations (en/es)
```

## 🎯 Development Roadmap

### ✅ **Stage 0-1: Foundation & Variant A** (COMPLETED)
- [x] Planning documentation
- [x] Design system and tokens
- [x] Static data architecture
- [x] Variant A implementation
- [x] Admin panel skeleton
- [x] Experiments switcher

### 🔄 **Stage 2: Variant Selection** (NEXT)
- [ ] Complete Variant B & C
- [ ] Compare and select primary approach
- [ ] Responsive design refinement
- [ ] Accessibility audit (WCAG AA)

### 🔮 **Stage 3+: Backend Integration**
- [ ] Neon PostgreSQL + Prisma
- [ ] Stripe payment processing
- [ ] Resend email automation
- [ ] Cloudflare R2 storage
- [ ] Production deployment

## 🏆 Current Status

**✅ STAGE 0-1 COMPLETE**

You now have:
- **Production-ready Variant A** with all sections
- **Comprehensive documentation** in `/docs/`
- **Admin panel** for content management
- **Design system** following Stripe principles
- **Development environment** ready for Stage 2

**Next Step**: Visit `/experiments` to compare design variants and plan Stage 2 implementation.

---

*Built with Stripe-style design principles • February 2026 • Stanford University*
