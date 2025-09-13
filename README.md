# Mexico in Silicon Valley (MXSV) 2026 - Landing Page

A world-class, futuristic landing page for the MXSV conference featuring cutting-edge animations, e-commerce capabilities, and content management.

## 🌟 Features Completed

### ✅ Core Infrastructure
- **Next.js 14+** with App Router and TypeScript
- **Prisma ORM** with comprehensive PostgreSQL schema
- **i18n Support** for English and Spanish
- **Dark/Light Mode** with system preference detection
- **Tailwind CSS** with custom futuristic design system

### ✅ Animation & Design
- **Framer Motion** for smooth animations
- **Particles.js** for interactive background effects
- **Custom CSS** with glassmorphism and neon effects
- **3D transforms** and hover animations
- **Responsive design** for all devices

### ✅ Sections Built
- **Hero Section** with countdown timer to Feb 21-22, 2026
- **About Section** with animated statistics counters
- **Navigation** with language toggle and theme switcher

## 🏗️ Database Schema

The application includes comprehensive models for:
- Interest forms and newsletter subscriptions
- Ticket tiers and merchandise products
- Speakers, sponsors, and team members
- FAQ items and agenda management
- Order processing and admin authentication
- Email templates and session management

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mxsv-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.local` and update with your credentials:
   ```env
   DATABASE_URL="postgresql://..."
   STRIPE_SECRET_KEY="sk_test_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   SENDGRID_API_KEY="..."
   ADMIN_KEY="Arbol2026"
   JWT_SECRET="..."
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

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
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   └── api/               # API endpoints
├── components/
│   ├── sections/          # Page sections
│   ├── ui/               # Reusable UI components
│   └── providers/        # Context providers
├── lib/                  # Utility functions
├── locales/             # Translation files
└── types/               # TypeScript definitions
```

## 🎯 Key Features Planned

- **Real-time ticket availability** with live updates
- **Interactive agenda** with speaker filtering
- **Admin dashboard** for content management
- **E-commerce integration** for merchandise
- **Email automation** for registrations
- **Social media integration** and sharing
- **Analytics tracking** with Google Analytics

---

**Status**: Foundation Complete ✅ | Ready for Feature Development 🚀

The landing page is now running successfully at `http://localhost:3000` with a stunning hero section, animated about section, and full infrastructure ready for the remaining features.
