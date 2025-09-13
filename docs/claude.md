# Rules & Working Agreement

## How Claude Will Work

### 1. Documentation-First Approach
- Always read the PRD (`/docs/plan-milestones.md`) and architecture (`/docs/architecture.md`) first
- Ask for clarification only when there are blocking gaps
- Prefer long-term, maintainable solutions over quick hacks
- Keep all documentation updated when UI changes occur

### 2. Quality Standards
- Code must be production-ready and well-documented
- Follow existing patterns and conventions in the codebase
- Maintain consistent code style across all variants
- Ensure all features are accessible (WCAG 2.1 AA)

### 3. Testing Requirements (Stage 3+)
- Unit tests for utility functions and hooks
- Integration tests for complex components
- E2E tests for critical user flows
- Performance tests targeting Lighthouse scores ≥95

### 4. Development Process
- Work in discrete stages, never skip ahead
- Update documentation before major changes
- Maintain clear separation between UI variants
- Keep backend planning separate until Stage 3

## Definition of Done (DoD) per Stage

### Stage 0 - Planning Docs ✅
- [x] `/docs/claude.md` created with rules and working agreement
- [x] `/docs/plan-milestones.md` created with milestone breakdown
- [x] `/docs/moodboard.md` created with visual references
- [x] `/docs/architecture.md` created with technical brief
- [x] Clear checklists for each subsequent stage

### Stage 1 - Multi-Mock UI
- [ ] 3 complete visual variants (A: Pure Stripe, B: Editorial, C: Gradient Accent)
- [ ] `/experiments` switcher page functional
- [ ] Light theme as default (white backgrounds)
- [ ] Dark mode toggle present but optional
- [ ] Static i18n wired (en/es)
- [ ] Admin UI skeleton (read-only)
- [ ] No API calls (all data from `/data/*.json`)
- [ ] Lighthouse scores ≥95 for all categories

### Stage 2 - Selection & Polish
- [ ] One unified primary variant selected
- [ ] Responsive design excellence (mobile/tablet/desktop)
- [ ] Motion finalized (≤200ms, gentle easing)
- [ ] Accessibility hardened
- [ ] Print styles for tickets page
- [ ] Documentation updated

### Stage 3+ - Backend & Integrations
- [ ] Neon + Prisma wired
- [ ] R2 for asset storage
- [ ] Stripe for payments
- [ ] Resend for email
- [ ] Tests (unit/integration/E2E)
- [ ] Observability configured

## Component Development Guidelines

### UI Primitives Location
- Shared components: `/src/components/ui/`
- Section variants: `/src/components/sections/{section}/{variant}/`
- Layouts: `/src/components/layouts/`

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection.tsx`)
- Files: kebab-case for non-components (e.g., `theme-config.ts`)
- CSS classes: Tailwind utilities only
- Props interfaces: `{ComponentName}Props`

### State Management
- Server components by default
- Client components only when necessary
- Minimal client-side state
- No global state management until Stage 3

## Visual Design Constraints

### Stripe-Style Principles
1. **Clarity over cleverness** - Simple, direct communication
2. **White space is feature** - Generous padding and margins
3. **Subtle depth** - Soft shadows (1-2px), thin borders
4. **Restrained motion** - 150-250ms easings, scale ≤1.02
5. **No visual noise** - Avoid particles, glows, glassmorphism

### Color Usage
- Primary backgrounds: White (`#FFFFFF`) in light mode
- Borders: Tailwind gray-200 (`#E5E7EB`)
- Text: Tailwind gray-900 (`#111827`) primary, gray-600 (`#4B5563`) secondary
- Accent: Electric blue family for CTAs and focus states
- Gradients: As subtle accents only, never as backgrounds

### Typography
- Headings: Space Grotesk or similar geometric sans
- Body: Inter or system sans-serif
- Clear hierarchy with consistent scale
- Line heights optimized for readability

## Product Change Protocol

When significant product changes are requested:

1. **Pause implementation**
2. **Update `/docs/plan-milestones.md`** with new requirements
3. **Update `/docs/architecture.md`** if technical changes needed
4. **Update `/docs/moodboard.md`** if visual direction changes
5. **Get confirmation before proceeding**
6. **Implement changes following updated docs**

## File Organization

```
/src/
  /app/                    # Next.js app router
    /[locale]/            # i18n routing
      /admin/             # Admin pages
      /experiments/       # Variant switcher
      layout.tsx          # Root layout
      page.tsx            # Home (Variant A default)
  /components/
    /ui/                  # Shared primitives
    /sections/            # Section implementations
      /hero/
        /variant-a/
        /variant-b/
        /variant-c/
      /about/
      /agenda/
      ...
  /lib/                   # Utilities and configs
  /styles/                # Global styles and tokens
  /data/                  # Static JSON data
  /locales/               # i18n dictionaries
```

## Commit Guidelines

- Clear, descriptive commit messages
- Reference issue/task numbers when applicable
- Group related changes
- Test before committing
- No commented-out code in commits

## Performance Targets

- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1
- Bundle size: <200KB gzipped (Stage 1)
- Image optimization: WebP with fallbacks

## Accessibility Requirements

- Keyboard navigation complete
- Screen reader friendly
- Focus indicators visible
- Color contrast WCAG AA
- Reduced motion respected
- Semantic HTML throughout