# AI Stock Mentor Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from educational fintech platforms like Robinhood's learning center, Mint's financial dashboard, and Duolingo's gamified learning interface. This creates an approachable, engaging experience for stock market beginners while maintaining professional credibility.

## Core Design Elements

### Color Palette
**Primary Colors (Dark Mode):**
- Background: 220 25% 8% (deep navy)
- Surface: 220 20% 12% (elevated surfaces)
- Primary brand: 142 76% 45% (financial green)
- Text primary: 0 0% 95% (near white)

**Light Mode:**
- Background: 0 0% 98% (off-white)
- Surface: 0 0% 100% (pure white)
- Primary brand: 142 76% 35% (darker financial green)
- Text primary: 220 25% 15% (dark navy)

**Accent Colors:**
- Success: 142 76% 45% (green for gains)
- Warning: 45 93% 58% (amber for caution)
- Danger: 0 84% 60% (red for losses)
- Info: 217 91% 60% (blue for neutral information)

**Gradients:**
- Hero backgrounds: Subtle gradient from primary brand to deeper teal
- Card overlays: Gentle gradient overlays on educational content cards
- Progress indicators: Animated gradients for gamified elements

### Typography
**Font Stack:** Inter (Google Fonts) for all text
- Headlines: 600-700 weight, 24-48px
- Body text: 400-500 weight, 14-16px
- Captions: 400 weight, 12-14px
- Numbers/data: 500-600 weight for emphasis

### Layout System
**Spacing Units:** Consistent use of Tailwind units 2, 4, 6, 8, 12, 16
- Component padding: p-4, p-6
- Section margins: m-8, m-12
- Grid gaps: gap-4, gap-6
- Container max-width: max-w-6xl

### Component Library

**Navigation:**
- Sticky header with logo, main navigation, and user avatar
- Mobile hamburger menu with slide-out drawer
- Breadcrumb navigation for educational modules

**Dashboard Cards:**
- Elevated cards with subtle shadows and rounded corners
- Color-coded borders for risk levels (green/yellow/red)
- Progress bars with animated fills
- Badge system with playful icons

**Forms:**
- Clean input fields with floating labels
- Stock symbol autocomplete with dropdown suggestions
- Quantity steppers with + / - buttons
- Form validation with inline error states

**Data Visualization:**
- Simple pie charts for portfolio allocation
- Progress rings for portfolio health scores
- Market mood indicator with animated bull/bear icons
- Mini charts for stock performance trends

**Demo Mode Features:**
- Guided tour overlays with spotlight effects
- Interactive tutorials with step-by-step highlights
- Educational tooltips with rich content
- Practice portfolio with sample data

### Images
**Hero Section:** Large hero image showcasing diverse people learning about investing, with gradient overlay for text readability. Use outline variant buttons with blurred backgrounds.

**Educational Content:** Icon-based illustrations for concepts like diversification, risk levels, and market trends. Use consistent illustration style throughout.

**Gamification Elements:** Achievement badges, progress indicators, and celebration animations for completing learning modules.

### Animations
**Minimal and Purposeful:**
- Smooth transitions between dashboard states
- Gentle hover effects on interactive elements
- Progress bar animations for portfolio analysis
- Subtle loading states for AI recommendations
- Achievement celebration micro-animations

### Mobile Responsiveness
- Mobile-first approach with touch-friendly targets
- Collapsible navigation for smaller screens
- Swipeable cards for portfolio items
- Bottom navigation for core features on mobile

### Accessibility
- High contrast ratios in both light and dark modes
- Keyboard navigation support
- Screen reader friendly labels
- Color-blind friendly palette choices
- Focus indicators for all interactive elements

This design creates an educational, approachable platform that makes stock market learning engaging for beginners while maintaining the credibility needed for financial advice.