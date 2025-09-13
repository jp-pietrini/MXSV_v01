# MXSV Landing Page - Variant Comparison Guide

## 🚀 Multi-Port Development Setup

You can now run and compare all variants simultaneously on different ports:

### Available Variants

| Variant | Port | URL | Style |
|---------|------|-----|-------|
| **Variant A: Pure Stripe** | 3000 | http://localhost:3000/variant-a | Ultra-minimal, thin borders, soft shadows |
| **Variant B: Editorial Stripe** | 3001 | http://localhost:3001/variant-b | Larger typography, enhanced imagery |
| **Variant C: Gradient Accent** | 3002 | http://localhost:3002/variant-c | Subtle gradients, strategic color |

### Development Commands

```bash
# Run individual variants
npm run dev:variant-a  # Port 3000
npm run dev:variant-b  # Port 3001
npm run dev:variant-c  # Port 3002

# Run all variants simultaneously
npm run dev:all

# Default development (Variant A)
npm run dev
```

### Direct Variant Access

Each variant is also available as direct routes on any port:
- `/variant-a` - Pure Stripe variant
- `/variant-b` - Editorial Stripe variant
- `/variant-c` - Gradient Accent variant (coming soon)
- `/experiments` - Variant comparison page

## 📋 Variant Comparison

### Variant A: Pure Stripe
**Philosophy**: "Less is more" - Ultra-minimal Stripe aesthetic

**Key Features**:
- 1-2px borders throughout
- Soft shadows (shadow-sm, shadow-lg)
- Clean typography with generous white space
- Subtle animations (150-200ms)
- Ultra-minimal button styles
- Restrained hover effects (scale ≤1.02)

**Best For**: Users who prefer clean, distraction-free experiences

### Variant B: Editorial Stripe ✅ COMPLETED
**Philosophy**: "Content-first" - Editorial layout with Stripe cleanliness

**Key Features**:
- **Larger typography scale** (text-5xl to text-8xl headlines)
- **Enhanced visual hierarchy** with editorial spacing
- **More prominent imagery** and visual elements
- **Bold call-to-actions** with larger buttons
- **Editorial-style quotes** and testimonials
- **Enhanced stats display** with bigger numbers

**Implementation Status**: ✅ Complete
- ✅ Hero section with large typography
- ✅ About section with editorial layout
- ✅ Agenda with enhanced session cards
- ✅ Speakers with larger profile cards
- ✅ Sponsors with tiered visual hierarchy
- ✅ Tickets with prominent pricing
- ✅ FAQ with expanded interactions
- ✅ Contact with comprehensive form

### Variant C: Gradient Accent
**Philosophy**: "Subtle color guidance" - Strategic gradients while maintaining white backgrounds

**Planned Features**:
- Subtle gradient accents on key elements
- White backgrounds maintained throughout
- Strategic color usage to guide attention
- Balanced approach between minimal and colorful
- Gradient buttons and highlight elements

**Implementation Status**: 🔄 Pending

## 🎯 Current Status

### ✅ Completed
- Variant A (Pure Stripe) - Fully implemented
- Variant B (Editorial Stripe) - Fully implemented
- Multi-port development setup
- Variant routing system
- Experiments comparison page

### 🔄 In Progress
- Variant C (Gradient Accent) implementation

### 📊 Comparison Testing

**Current Setup**:
- **Port 3000**: Default/Variant A (Pure Stripe)
- **Port 3001**: Variant B (Editorial Stripe) ✅ ACTIVE
- **Port 3002**: Reserved for Variant C

**Testing Workflow**:
1. Start multiple development servers: `npm run dev:all`
2. Open browsers to each port for side-by-side comparison
3. Navigate to the same sections across variants
4. Compare user experience and visual impact

## 🔗 Quick Links

- **Experiments Hub**: http://localhost:3000/experiments
- **Variant A Demo**: http://localhost:3000/variant-a
- **Variant B Demo**: http://localhost:3001/variant-b
- **Admin Panel**: http://localhost:3000/admin

---

**Note**: Variant B is now fully implemented with all sections complete. You can run both variants simultaneously to compare their different approaches to the Stripe aesthetic.