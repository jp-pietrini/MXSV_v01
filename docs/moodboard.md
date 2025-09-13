# Visual Moodboard

## Design Philosophy
Stripe-style clarity with Mexican innovation spirit - clean, professional, and subtly vibrant.

## Core Visual Principles

### 1. Space & Breathing Room
- **Hero sections:** 120-160px padding top/bottom
- **Section spacing:** 80-100px between major sections
- **Card padding:** 24-32px internal padding
- **Button padding:** 12px vertical, 24px horizontal
- **Inline spacing:** 16-24px between related elements

### 2. Grid System
```css
/* Container widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Common grids */
2-column: grid-cols-1 md:grid-cols-2
3-column: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
4-column: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

### 3. Color Palette

#### Light Mode (Default)
```css
/* Backgrounds */
--bg-primary: #FFFFFF;
--bg-secondary: #FAFAFA;
--bg-tertiary: #F5F5F5;

/* Text */
--text-primary: #111827;    /* gray-900 */
--text-secondary: #4B5563;   /* gray-600 */
--text-tertiary: #9CA3AF;    /* gray-400 */

/* Borders */
--border-light: #F3F4F6;     /* gray-100 */
--border-default: #E5E7EB;   /* gray-200 */
--border-dark: #D1D5DB;      /* gray-300 */

/* Accent Colors */
--accent-primary: #0066FF;   /* Electric blue */
--accent-hover: #0052CC;
--accent-active: #0041A3;
--accent-light: #E6F0FF;

/* Status Colors */
--success: #10B981;          /* green-500 */
--warning: #F59E0B;          /* amber-500 */
--error: #EF4444;            /* red-500 */
```

#### Dark Mode (Optional)
```css
/* Invert hierarchy for dark mode */
--bg-primary: #0A0A0A;
--bg-secondary: #1A1A1A;
--text-primary: #F9FAFB;
--border-default: #2D2D2D;
```

### 4. Typography Scale

#### Font Families
```css
/* Headings */
font-family: 'Space Grotesk', -apple-system, sans-serif;

/* Body */
font-family: 'Inter', -apple-system, sans-serif;
```

#### Type Scale (Mobile → Desktop)
```css
/* Display */
.text-display: 3rem → 4.5rem (48px → 72px)

/* H1 */
.text-h1: 2.25rem → 3rem (36px → 48px)

/* H2 */
.text-h2: 1.875rem → 2.25rem (30px → 36px)

/* H3 */
.text-h3: 1.5rem → 1.875rem (24px → 30px)

/* H4 */
.text-h4: 1.25rem → 1.5rem (20px → 24px)

/* Body Large */
.text-lg: 1.125rem (18px)

/* Body */
.text-base: 1rem (16px)

/* Small */
.text-sm: 0.875rem (14px)

/* Caption */
.text-xs: 0.75rem (12px)
```

### 5. Shadow Scale
```css
/* Tailwind shadows with custom values */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.10);
--shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.12);

/* Focus ring */
--shadow-focus: 0 0 0 3px rgba(0, 102, 255, 0.15);
```

### 6. Border Styles

#### Card Borders
```css
/* Default card */
border: 1px solid #E5E7EB;
border-radius: 12px;

/* Hover state */
border-color: #D1D5DB;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

/* Focus state */
border-color: #0066FF;
box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.15);
```

#### Dividers
```css
/* Horizontal */
height: 1px;
background: linear-gradient(90deg, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent);

/* Vertical */
width: 1px;
background: #E5E7EB;
```

### 7. Animation Patterns

#### Timing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

#### Duration Scale
```css
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
```

#### Common Animations
```css
/* Hover scale */
transform: scale(1.02);
transition: transform 200ms ease-out;

/* Fade in */
opacity: 0 → 1;
transition: opacity 200ms ease-out;

/* Slide up */
transform: translateY(8px) → translateY(0);
transition: transform 200ms ease-out;
```

### 8. Component Patterns

#### Buttons
```css
/* Primary */
background: #0066FF;
color: white;
padding: 12px 24px;
border-radius: 8px;
font-weight: 500;
transition: all 200ms ease-out;

/* Hover */
background: #0052CC;
transform: translateY(-1px);
box-shadow: 0 4px 8px rgba(0, 102, 255, 0.2);

/* Secondary */
background: white;
border: 1px solid #E5E7EB;
color: #111827;

/* Ghost */
background: transparent;
color: #0066FF;
```

#### Cards
```css
/* Base */
background: white;
border: 1px solid #E5E7EB;
border-radius: 12px;
padding: 24px;

/* Interactive */
cursor: pointer;
transition: all 200ms ease-out;

/* Hover */
border-color: #D1D5DB;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
transform: translateY(-2px);
```

#### Badges
```css
/* Base */
padding: 4px 12px;
border-radius: 9999px;
font-size: 14px;
font-weight: 500;

/* Variants */
.badge-primary: background: #E6F0FF; color: #0066FF;
.badge-success: background: #D1FAE5; color: #059669;
.badge-warning: background: #FEF3C7; color: #D97706;
```

### 9. Section Examples

#### Hero Section
- Full viewport height or minimum 600px
- Large display typography
- Subtle gradient accent (optional)
- Clear CTA buttons
- Animated elements on load

#### Feature Cards
- Clean white backgrounds
- Thin borders (1px)
- Subtle shadow on hover
- Icon + heading + description
- Consistent padding

#### Pricing Tables
- Clear tier differentiation
- Highlighted recommended plan
- Check marks for features
- Strong CTA per tier
- Comparison mode available

### 10. Do's and Don'ts

#### DO ✅
- Use generous white space
- Keep animations subtle (<250ms)
- Maintain consistent border radius (8-12px)
- Use system fonts for performance
- Layer shadows for depth
- Respect reduced motion preferences

#### DON'T ❌
- Use drop shadows larger than 16px
- Apply gradients to backgrounds
- Use more than 2 accent colors
- Create busy patterns or textures
- Animate multiple properties simultaneously
- Use neon colors or glassmorphism

### 11. Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### 12. Accessibility Considerations

- **Focus rings:** Always visible, 3px, accent color
- **Contrast ratios:** AA minimum (4.5:1 normal, 3:1 large)
- **Touch targets:** Minimum 44x44px
- **Motion:** Respect prefers-reduced-motion
- **Keyboard:** All interactive elements reachable
- **Screen readers:** Proper ARIA labels

### 13. Performance Guidelines

- **Images:** WebP with JPEG fallback
- **Fonts:** Variable fonts when possible
- **Icons:** SVG sprites or icon fonts
- **Animations:** CSS over JavaScript
- **Loading:** Progressive enhancement
- **Bundle:** <200KB initial load

### 14. Mexican Innovation Touches

While maintaining Stripe-like minimalism:
- **Subtle geometric patterns** inspired by Mexican tiles (as decorative accents only)
- **Color accents** from Mexican flag (green/red) used sparingly for special elements
- **Typography** can include one display moment with Mexican-inspired serif
- **Icons** can incorporate subtle circuit/tech patterns (referencing the logo)

### 15. Reference Sites

#### Direct Inspiration
- stripe.com - Navigation, cards, spacing
- linear.app - Gradients, animations
- vercel.com - Typography, dark mode
- raycast.com - Product sections

#### Layout References
- pitch.com - Hero sections
- notion.so - Feature grids
- figma.com - Pricing tables

### Visual Hierarchy Checklist

- [ ] Clear focal point per section
- [ ] Consistent spacing rhythm
- [ ] Logical reading flow
- [ ] Proper contrast between elements
- [ ] Intentional use of color
- [ ] Balanced composition
- [ ] Mobile-first approach
- [ ] Performance-optimized assets