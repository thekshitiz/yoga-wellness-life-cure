# Yoga Wellness Life Cure - Documentation

## Project Structure

```bash
frontend/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── sections/      # Page sections
│   └── lib/               # Utility functions
└── public/                # Static assets
```

## Core Features

### 1. UI Components

-   **Button** (`src/components/ui/button.tsx`)

    -   Customizable variants: default, destructive, outline, etc.
    -   Size variations: default, sm, lg, icon
    -   Uses class-variance-authority for style variants

-   **Card** (`src/components/ui/card.tsx`)

    -   Modular card components with header, content, footer
    -   Used in yoga classes and plants sections

-   **Input & Textarea** (`src/components/ui/input.tsx`, `src/components/ui/textarea.tsx`)
    -   Styled form controls
    -   Used in contact form

### 2. Page Sections

#### Header (`src/components/header.tsx`)

-   Navigation menu
-   Responsive design
-   Links to different sections

#### Hero Section

-   Main landing section
-   Call-to-action buttons
-   Key messaging

#### Yoga Classes Section (`src/components/yoga-section.tsx`)

-   Displays different yoga classes
-   Animated cards using Framer Motion
-   Class descriptions and details

#### Plants Section (`src/components/plant-section.tsx`)

-   Showcases healing plants
-   Animated grid layout
-   Plant benefits information

#### Testimonials (`src/components/testimonials.tsx`)

-   Customer reviews
-   Social proof
-   Animated transitions

#### Contact Form (`src/components/contact.tsx`)

-   Interactive form
-   Social media links
-   Location and contact information

### 3. Styling System

#### Tailwind Configuration (`tailwind.config.js`)

-   Custom color scheme
-   Responsive breakpoints
-   Typography scale

#### Global Styles (`src/app/globals.css`)

-   CSS variables for theming
-   Base styles
-   Utility classes

### 4. Animations

-   Using Framer Motion for:
    -   Section transitions
    -   Card animations
    -   Scroll animations

## Dependencies

-   Next.js 14
-   React 18
-   Tailwind CSS
-   Framer Motion
-   Lucide Icons
-   Radix UI

## Future Improvements

### 1. Features to Add

-   [ ] Dark mode support
-   [ ] User authentication
-   [ ] Class booking system
-   [ ] Blog section
-   [ ] Newsletter subscription
-   [ ] Online payment integration
-   [ ] Class schedule calendar
-   [ ] Video content integration

### 2. Technical Improvements

-   [ ] Image optimization
-   [ ] SEO optimization
-   [ ] Performance monitoring
-   [ ] Analytics integration
-   [ ] Accessibility improvements
-   [ ] Unit tests
-   [ ] E2E tests

### 3. Design Enhancements

-   [ ] More interactive animations
-   [ ] Custom illustrations
-   [ ] Video backgrounds
-   [ ] Improved mobile navigation
-   [ ] Loading states
-   [ ] Error states
-   [ ] Success messages

### 4. Content Additions

-   [ ] Instructor profiles
-   [ ] Detailed class descriptions
-   [ ] Plant care guides
-   [ ] Yoga pose library
-   [ ] Meditation guides
-   [ ] Success stories
-   [ ] FAQ section

## Component Dependencies

### Key File Relationships

1. `layout.tsx` → `globals.css`

    - Defines root layout and imports global styles

2. `page.tsx` → All section components

    - Assembles main page from section components

3. UI Components → Section Components

    - Button → Contact, Hero
    - Card → Yoga Section, Plant Section
    - Input/Textarea → Contact Form

4. Utils (`lib/utils.ts`) → UI Components
    - Provides utility functions for className merging

## Style System

### CSS Variables

-   Located in `globals.css`
-   Defines theme colors
-   Controls spacing and typography

### Tailwind Classes

-   Custom components use consistent class patterns
-   Responsive utilities
-   Theme-aware styles

## Best Practices

1. Use TypeScript for type safety
2. Implement responsive design
3. Follow accessibility guidelines
4. Optimize performance
5. Maintain consistent code style

## Development Guidelines

1. Keep components small and focused
2. Use TypeScript strictly
3. Follow Next.js best practices
4. Document complex logic
5. Test components thoroughly

## Deployment

-   Vercel recommended for Next.js
-   Environment variables needed
-   Build optimization suggestions
