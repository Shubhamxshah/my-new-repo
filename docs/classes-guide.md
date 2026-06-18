# CSS Classes Guide - Multi-Theme Design System

This guide covers all available CSS classes and their usage in the multi-theme design system.

## Theme System

The design system supports multiple themes with automatic dark/light mode switching:

### Available Themes

-   **Default**: Clean, professional design
-   **Airbnb**: Warm, welcoming design with red accents
-   **Slack**: Purple-focused design with rounded corners
-   **GitHub**: Minimal, developer-friendly design
-   **Spotify**: Dark-first design with green accents

### Theme Classes

```html
<!-- Default theme (default) -->
<div data-theme="default">...</div>

<!-- Airbnb theme -->
<div data-theme="airbnb">...</div>

<!-- Slack theme -->
<div data-theme="slack">...</div>

<!-- GitHub theme -->
<div data-theme="github">...</div>

<!-- Spotify theme -->
<div data-theme="spotify">...</div>

<!-- Dark mode (add .dark class) -->
<div data-theme="airbnb" class="dark">...</div>
```

## Base Classes

### Background Classes

```html
<!-- Primary background -->
<div class="bg-background">...</div>

<!-- Card background -->
<div class="bg-card">...</div>

<!-- Muted background -->
<div class="bg-muted">...</div>

<!-- Secondary background -->
<div class="bg-secondary">...</div>

<!-- Popover background -->
<div class="bg-popover">...</div>

<!-- Accent background -->
<div class="bg-accent">...</div>

<!-- Destructive background -->
<div class="bg-destructive">...</div>
```

### Text Classes

```html
<!-- Primary text -->
<p class="text-foreground">...</p>

<!-- Card text -->
<p class="text-card-foreground">...</p>

<!-- Muted text -->
<p class="text-muted-foreground">...</p>

<!-- Secondary text -->
<p class="text-secondary-foreground">...</p>

<!-- Popover text -->
<p class="text-popover-foreground">...</p>

<!-- Accent text -->
<p class="text-accent-foreground">...</p>

<!-- Destructive text -->
<p class="text-destructive-foreground">...</p>
```

### Border Classes

```html
<!-- Default border -->
<div class="border-border">...</div>

<!-- Input border -->
<input class="border-input">...</input>
```

### Ring Classes

```html
<!-- Focus ring -->
<button class="focus:ring-ring">...</button>

<!-- Ring with offset -->
<button class="ring-2 ring-ring ring-offset-2">...</button>
```

## Component Classes

### Button Classes

```html
<!-- Themed button with hover effects -->
<button class="themed-button px-4 py-2">Click me</button>

<!-- Primary button -->
<button class="bg-primary text-primary-foreground hover:bg-primary/90">Primary Button</button>

<!-- Secondary button -->
<button class="bg-secondary text-secondary-foreground hover:bg-secondary/80">Secondary Button</button>

<!-- Destructive button -->
<button class="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</button>
```

**Features:**

-   Automatic theme-aware colors
-   Hover effects with shadow
-   Smooth transitions
-   Proper border radius

### Card Classes

```html
<!-- Themed card with shadow -->
<div class="themed-card p-6">
    <h3 class="text-lg font-semibold">Card Title</h3>
    <p class="text-muted-foreground">Card content...</p>
</div>
```

**Features:**

-   Theme-aware background and text
-   Subtle shadow
-   Rounded corners
-   Border styling

### Input Classes

```html
<!-- Themed input field -->
<input class="themed-input px-3 py-2 w-full" placeholder="Enter text..." />

<!-- Standard input -->
<input
    class="bg-background border-input text-foreground placeholder:text-muted-foreground"
    placeholder="Enter text..."
/>

<!-- Focused input -->
<input
    class="bg-background border-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
    placeholder="Enter text..."
/>
```

**Features:**

-   Focus ring styling
-   Theme-aware colors
-   Smooth transitions
-   Proper border radius

### Modal Classes

```html
<!-- Themed modal -->
<div class="themed-modal p-6 max-w-md">
    <h2 class="text-xl font-bold mb-4">Modal Title</h2>
    <p>Modal content...</p>
</div>

<!-- Standard modal -->
<div class="bg-card text-card-foreground border border-border p-6">
    <h2 class="text-xl font-bold mb-4">Modal Title</h2>
    <p>Modal content...</p>
</div>

<!-- Modal backdrop -->
<div class="bg-black/50 backdrop-blur-sm">
    <!-- Modal content -->
</div>
```

**Features:**

-   Large border radius
-   Heavy shadow
-   Theme-aware backdrop
-   Proper spacing

### Dropdown Classes

```html
<!-- Themed dropdown -->
<div class="themed-dropdown p-2">
    <div class="px-3 py-2 hover:bg-accent">Option 1</div>
    <div class="px-3 py-2 hover:bg-accent">Option 2</div>
</div>

<!-- Standard dropdown -->
<div class="bg-popover text-popover-foreground border border-border p-2">
    <div class="px-3 py-2 hover:bg-accent">Option 1</div>
    <div class="px-3 py-2 hover:bg-accent">Option 2</div>
</div>

<!-- Dropdown with shadow -->
<div class="bg-popover text-popover-foreground border border-border shadow-lg p-2">
    <div class="px-3 py-2 hover:bg-accent">Option 1</div>
    <div class="px-3 py-2 hover:bg-accent">Option 2</div>
</div>
```

**Features:**

-   High z-index
-   Theme-aware background
-   Hover effects
-   Proper shadow

### Sidebar Classes

```html
<!-- Themed sidebar -->
<aside class="themed-sidebar w-64 p-4 border-r">
    <nav>Sidebar content...</nav>
</aside>

<!-- Standard sidebar -->
<aside class="bg-card text-card-foreground border-r border-border w-64 p-4">
    <nav>Sidebar content...</nav>
</aside>

<!-- Sidebar with custom background -->
<aside class="bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border w-64 p-4">
    <nav>Sidebar content...</nav>
</aside>
```

**Features:**

-   Theme-specific background
-   Proper border styling
-   Consistent spacing

### Table Classes

```html
<!-- Themed table header -->
<table>
    <thead class="themed-table-header">
        <tr>
            <th class="px-4 py-2">Header 1</th>
            <th class="px-4 py-2">Header 2</th>
        </tr>
    </thead>
</table>

<!-- Standard table -->
<table class="w-full">
    <thead class="bg-muted">
        <tr>
            <th class="px-4 py-2 text-left">Header 1</th>
            <th class="px-4 py-2 text-left">Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-border">
            <td class="px-4 py-2">Data 1</td>
            <td class="px-4 py-2">Data 2</td>
        </tr>
    </tbody>
</table>

<!-- Table with custom header background -->
<table class="w-full">
    <thead class="bg-table-header">
        <tr>
            <th class="px-4 py-2 text-left">Header 1</th>
            <th class="px-4 py-2 text-left">Header 2</th>
        </tr>
    </thead>
</table>
```

### Code Classes

```html
<!-- Themed code block -->
<code class="themed-code"> console.log('Hello World'); </code>

<!-- Standard code -->
<code class="bg-muted text-foreground font-mono text-sm px-2 py-1 rounded"> console.log('Hello World'); </code>

<!-- Code with custom background -->
<code class="bg-code-background text-foreground font-mono text-sm px-2 py-1 rounded">
    console.log('Hello World');
</code>
```

**Features:**

-   Monospace font
-   Theme-aware background
-   Small border radius
-   Proper padding

## Gradient Classes

### Background Gradients

```html
<!-- Primary gradient -->
<div class="bg-gradient-primary p-6 text-white">Primary gradient background</div>

<!-- Secondary gradient -->
<div class="bg-gradient-secondary p-6">Secondary gradient background</div>

<!-- Brand gradient -->
<div class="bg-gradient-brand p-6 text-white">Brand gradient background</div>
```

## Shadow Classes

### Theme-Aware Shadows

```html
<!-- Small shadow -->
<div class="shadow-themed-sm p-4">Small shadow</div>

<!-- Medium shadow -->
<div class="shadow-themed-md p-4">Medium shadow</div>

<!-- Large shadow -->
<div class="shadow-themed-lg p-4">Large shadow</div>

<!-- Extra large shadow -->
<div class="shadow-themed-xl p-4">Extra large shadow</div>
```

## Interactive Classes

### Hover Effects

```html
<!-- Interactive hover with scale and shadow -->
<div class="interactive-hover p-4 bg-card rounded-themed">Hover me for effects</div>
```

**Features:**

-   Scale transform on hover
-   Enhanced shadow on hover
-   Smooth transitions

## Focus Classes

### Focus Styling

```html
<!-- Themed focus ring -->
<button class="focus-themed px-4 py-2 bg-primary text-primary-foreground">Focus me</button>
```

**Features:**

-   Ring offset from background
-   Theme-aware ring color
-   Proper outline removal

## Border Radius Classes

### Theme-Aware Border Radius

```html
<!-- Default radius -->
<div class="rounded-themed p-4">Default radius</div>

<!-- Large radius -->
<div class="rounded-themed-lg p-4">Large radius</div>

<!-- Extra large radius -->
<div class="rounded-themed-xl p-4">Extra large radius</div>
```

## Typography Classes

### Brand Colors

```html
<!-- Brand primary text -->
<h1 class="text-brand-primary text-2xl">Brand Primary</h1>

<!-- Brand secondary text -->
<p class="text-brand-secondary">Brand Secondary</p>

<!-- Brand accent text -->
<span class="text-brand-accent">Brand Accent</span>
```

## Additional Component Classes

### Popover Classes

```html
<!-- Popover container -->
<div class="bg-popover text-popover-foreground border border-border p-4">
    <h3 class="font-semibold mb-2">Popover Title</h3>
    <p>Popover content...</p>
</div>

<!-- Popover with shadow -->
<div class="bg-popover text-popover-foreground border border-border shadow-lg p-4">
    <p>Popover with enhanced shadow</p>
</div>
```

### Accent Classes

```html
<!-- Accent background -->
<div class="bg-accent text-accent-foreground p-4">Accent content</div>

<!-- Accent hover states -->
<button class="hover:bg-accent hover:text-accent-foreground p-2">Hover me</button>
```

### Destructive Classes

```html
<!-- Destructive background -->
<div class="bg-destructive text-destructive-foreground p-4">Destructive action</div>

<!-- Destructive button -->
<button class="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete Item</button>
```

### Ring Offset Classes

```html
<!-- Ring with background offset -->
<button class="ring-2 ring-ring ring-offset-2 ring-offset-background">Focus me</button>

<!-- Ring with card offset -->
<button class="ring-2 ring-ring ring-offset-2 ring-offset-card">Focus me</button>
```

### Transition Classes

```html
<!-- Color transitions -->
<div class="transition-colors duration-300">Smooth color transitions</div>

<!-- Transform transitions -->
<div class="transition-transform duration-200">Smooth transform transitions</div>

<!-- All transitions -->
<div class="transition-all duration-150">Smooth all transitions</div>
```

### Font Family Classes

```html
<!-- Custom font family -->
<div class="font-inter">Using Inter font family</div>

<!-- Font family variable -->
<div style="font-family: var(--font-family)">Using CSS variable font family</div>
```

## Semantic Color Classes

### Success Colors

```html
<!-- Success text -->
<p class="text-success">Operation completed successfully!</p>

<!-- Success background -->
<div class="bg-success text-white p-2 rounded-themed">Success message</div>
```

### Warning Colors

```html
<!-- Warning text -->
<p class="text-warning">Please review your input</p>

<!-- Warning background -->
<div class="bg-warning text-white p-2 rounded-themed">Warning message</div>
```

### Error Colors

```html
<!-- Error text -->
<p class="text-error">An error occurred</p>

<!-- Error background -->
<div class="bg-error text-white p-2 rounded-themed">Error message</div>
```

### Info Colors

```html
<!-- Info text -->
<p class="text-info">Here's some information</p>

<!-- Info background -->
<div class="bg-info text-white p-2 rounded-themed">Info message</div>
```

## Usage Examples

### Complete Component Example

```html
<div data-theme="airbnb" class="min-h-screen bg-background">
    <!-- Header -->
    <header class="bg-card border-b border-border p-4">
        <h1 class="text-2xl font-bold text-foreground">My App</h1>
    </header>

    <!-- Main Content -->
    <main class="p-6">
        <!-- Card Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div class="themed-card p-6 interactive-hover">
                <h3 class="text-lg font-semibold text-foreground mb-2">Card Title</h3>
                <p class="text-muted-foreground mb-4">Card description...</p>
                <button class="themed-button px-4 py-2 focus-themed">Action</button>
            </div>

            <!-- Card 2 -->
            <div class="themed-card p-6 interactive-hover">
                <h3 class="text-lg font-semibold text-foreground mb-2">Another Card</h3>
                <p class="text-muted-foreground mb-4">More content...</p>
                <div class="bg-gradient-primary p-3 rounded-themed text-white">Gradient background</div>
            </div>
        </div>

        <!-- Form Section -->
        <div class="mt-8">
            <h2 class="text-xl font-bold text-foreground mb-4">Contact Form</h2>
            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-foreground mb-2"> Name </label>
                    <input class="themed-input w-full px-3 py-2 focus-themed" placeholder="Enter your name" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-foreground mb-2"> Email </label>
                    <input
                        class="themed-input w-full px-3 py-2 focus-themed"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <button class="themed-button px-6 py-2 focus-themed">Submit</button>
            </form>
        </div>

        <!-- Status Messages -->
        <div class="mt-8 space-y-2">
            <div class="bg-success text-white p-3 rounded-themed">Success: Operation completed!</div>
            <div class="bg-warning text-white p-3 rounded-themed">Warning: Please review your input</div>
            <div class="bg-error text-white p-3 rounded-themed">Error: Something went wrong</div>
            <div class="bg-info text-white p-3 rounded-themed">Info: Here's some helpful information</div>
        </div>
    </main>
</div>
```

### Dark Mode Toggle Example

```html
<div data-theme="github" class="min-h-screen bg-background transition-colors duration-300">
    <div class="p-4">
        <button
            onclick="document.documentElement.classList.toggle('dark')"
            class="themed-button px-4 py-2 focus-themed"
        >
            Toggle Dark Mode
        </button>
    </div>

    <div class="themed-card p-6 m-4">
        <h2 class="text-xl font-bold text-foreground mb-4">Theme Demo</h2>
        <p class="text-muted-foreground">This content automatically adapts to light/dark mode.</p>
    </div>
</div>
```

## Best Practices

1. **Always use theme-aware classes** instead of hardcoded colors
2. **Combine classes** for complex styling (e.g., `themed-card interactive-hover`)
3. **Use semantic colors** for status messages and alerts
4. **Test in both light and dark modes** for all themes
5. **Leverage CSS custom properties** for custom styling when needed
6. **Use consistent spacing** with Tailwind's spacing scale
7. **Implement proper focus management** for accessibility

## Browser Support

-   Modern browsers with CSS custom properties support
-   Automatic fallback to default theme for older browsers
-   Progressive enhancement approach

## CSS Custom Properties Reference

### Core Color Properties

```css
/* Background colors */
--background: 0 0% 100%; /* Main background */
--foreground: 222.2 84% 4.9%; /* Main text color */
--card: 0 0% 100%; /* Card background */
--card-foreground: 222.2 84% 4.9%; /* Card text color */
--popover: 0 0% 100%; /* Popover background */
--popover-foreground: 222.2 84% 4.9%; /* Popover text color */

/* Primary colors */
--primary: 222.2 47.4% 11.2%; /* Primary brand color */
--primary-foreground: 210 40% 98%; /* Text on primary */

/* Secondary colors */
--secondary: 210 40% 96.1%; /* Secondary background */
--secondary-foreground: 222.2 47.4% 11.2%; /* Text on secondary */

/* Muted colors */
--muted: 210 40% 96.1%; /* Muted background */
--muted-foreground: 215.4 16.3% 46.9%; /* Muted text */

/* Accent colors */
--accent: 210 40% 96.1%; /* Accent background */
--accent-foreground: 222.2 47.4% 11.2%; /* Text on accent */

/* Destructive colors */
--destructive: 0 84.2% 60.2%; /* Error/danger color */
--destructive-foreground: 210 40% 98%; /* Text on destructive */

/* Border and input colors */
--border: 214.3 31.8% 91.4%; /* Border color */
--input: 214.3 31.8% 91.4%; /* Input border color */
--ring: 222.2 84% 4.9%; /* Focus ring color */
--radius: 0.5rem; /* Border radius */
```

### Brand Color Properties

```css
--brand-primary: 222.2 47.4% 11.2%; /* Brand primary color */
--brand-secondary: 210 40% 96.1%; /* Brand secondary color */
--brand-accent: 210 40% 96.1%; /* Brand accent color */
```

### Semantic Color Properties

```css
--success: 142.1 76.2% 36.3%; /* Success color */
--warning: 47.9 95.8% 53.1%; /* Warning color */
--error: 0 84.2% 60.2%; /* Error color */
--info: 199.89 89.55% 48.04%; /* Info color */
```

### Gradient Properties

```css
--gradient-primary: linear-gradient(135deg, hsl(222.2 47.4% 11.2%), hsl(222.2 47.4% 21.2%));
--gradient-secondary: linear-gradient(135deg, hsl(210 40% 96.1%), hsl(210 40% 93.1%));
--gradient-brand: linear-gradient(135deg, hsl(222.2 47.4% 11.2%), hsl(222.2 47.4% 21.2%));
```

### Shadow Properties

```css
--shadow-sm: 0 1px 2px 0 hsl(222.2 47.4% 11.2% / 0.05);
--shadow-md: 0 4px 6px -1px hsl(222.2 47.4% 11.2% / 0.1);
--shadow-lg: 0 10px 15px -3px hsl(222.2 47.4% 11.2% / 0.1);
--shadow-xl: 0 20px 25px -5px hsl(222.2 47.4% 11.2% / 0.1);
```

### Component-Specific Properties

```css
--sidebar-background: 0 0% 98%; /* Sidebar background */
--sidebar-foreground: 222.2 84% 4.9%; /* Sidebar text */
--sidebar-border: 214.3 31.8% 91.4%; /* Sidebar border */
--modal-backdrop: 222.2 84% 4.9% / 0.8; /* Modal backdrop */
--dropdown-background: 0 0% 100%; /* Dropdown background */
--table-header: 210 40% 96.1%; /* Table header background */
--code-background: 210 40% 96.1%; /* Code block background */
```

### Transition Properties

```css
--transition-colors: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
--transition-transform: transform 0.15s ease-in-out;
--transition-all: all 0.15s ease-in-out;
```

### Font Properties

```css
--font-family: 'Inter', sans-serif; /* Default font family */
```

## Direct CSS Variable Usage

You can also use CSS custom properties directly in your styles:

```css
.custom-element {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));
    border-radius: calc(var(--radius));
    box-shadow: var(--shadow-md);
    transition: var(--transition-all);
}

.custom-gradient {
    background: var(--gradient-primary);
}

.custom-shadow {
    box-shadow: var(--shadow-lg);
}
```

## Complete Class Reference Table

| Category          | Class Name                    | Description                  | Example Usage                         |
| ----------------- | ----------------------------- | ---------------------------- | ------------------------------------- |
| **Background**    | `bg-background`               | Main background color        | `class="bg-background"`               |
| **Background**    | `bg-card`                     | Card background color        | `class="bg-card"`                     |
| **Background**    | `bg-popover`                  | Popover background color     | `class="bg-popover"`                  |
| **Background**    | `bg-primary`                  | Primary brand background     | `class="bg-primary"`                  |
| **Background**    | `bg-secondary`                | Secondary background         | `class="bg-secondary"`                |
| **Background**    | `bg-muted`                    | Muted background             | `class="bg-muted"`                    |
| **Background**    | `bg-accent`                   | Accent background            | `class="bg-accent"`                   |
| **Background**    | `bg-destructive`              | Destructive/error background | `class="bg-destructive"`              |
| **Background**    | `bg-success`                  | Success background           | `class="bg-success"`                  |
| **Background**    | `bg-warning`                  | Warning background           | `class="bg-warning"`                  |
| **Background**    | `bg-error`                    | Error background             | `class="bg-error"`                    |
| **Background**    | `bg-info`                     | Info background              | `class="bg-info"`                     |
| **Background**    | `bg-gradient-primary`         | Primary gradient             | `class="bg-gradient-primary"`         |
| **Background**    | `bg-gradient-secondary`       | Secondary gradient           | `class="bg-gradient-secondary"`       |
| **Background**    | `bg-gradient-brand`           | Brand gradient               | `class="bg-gradient-brand"`           |
| **Text**          | `text-foreground`             | Main text color              | `class="text-foreground"`             |
| **Text**          | `text-card-foreground`        | Card text color              | `class="text-card-foreground"`        |
| **Text**          | `text-popover-foreground`     | Popover text color           | `class="text-popover-foreground"`     |
| **Text**          | `text-primary-foreground`     | Text on primary              | `class="text-primary-foreground"`     |
| **Text**          | `text-secondary-foreground`   | Text on secondary            | `class="text-secondary-foreground"`   |
| **Text**          | `text-muted-foreground`       | Muted text color             | `class="text-muted-foreground"`       |
| **Text**          | `text-accent-foreground`      | Text on accent               | `class="text-accent-foreground"`      |
| **Text**          | `text-destructive-foreground` | Text on destructive          | `class="text-destructive-foreground"` |
| **Text**          | `text-brand-primary`          | Brand primary text           | `class="text-brand-primary"`          |
| **Text**          | `text-brand-secondary`        | Brand secondary text         | `class="text-brand-secondary"`        |
| **Text**          | `text-brand-accent`           | Brand accent text            | `class="text-brand-accent"`           |
| **Text**          | `text-success`                | Success text                 | `class="text-success"`                |
| **Text**          | `text-warning`                | Warning text                 | `class="text-warning"`                |
| **Text**          | `text-error`                  | Error text                   | `class="text-error"`                  |
| **Text**          | `text-info`                   | Info text                    | `class="text-info"`                   |
| **Border**        | `border-border`               | Default border               | `class="border-border"`               |
| **Border**        | `border-input`                | Input border                 | `class="border-input"`                |
| **Ring**          | `ring-ring`                   | Focus ring color             | `class="ring-ring"`                   |
| **Ring**          | `ring-offset-background`      | Ring offset background       | `class="ring-offset-background"`      |
| **Ring**          | `ring-offset-card`            | Ring offset card             | `class="ring-offset-card"`            |
| **Shadow**        | `shadow-themed-sm`            | Small theme shadow           | `class="shadow-themed-sm"`            |
| **Shadow**        | `shadow-themed-md`            | Medium theme shadow          | `class="shadow-themed-md"`            |
| **Shadow**        | `shadow-themed-lg`            | Large theme shadow           | `class="shadow-themed-lg"`            |
| **Shadow**        | `shadow-themed-xl`            | Extra large theme shadow     | `class="shadow-themed-xl"`            |
| **Border Radius** | `rounded-themed`              | Theme border radius          | `class="rounded-themed"`              |
| **Border Radius** | `rounded-themed-lg`           | Large theme radius           | `class="rounded-themed-lg"`           |
| **Border Radius** | `rounded-themed-xl`           | Extra large theme radius     | `class="rounded-themed-xl"`           |
| **Components**    | `themed-button`               | Themed button component      | `class="themed-button"`               |
| **Components**    | `themed-card`                 | Themed card component        | `class="themed-card"`                 |
| **Components**    | `themed-input`                | Themed input component       | `class="themed-input"`                |
| **Components**    | `themed-modal`                | Themed modal component       | `class="themed-modal"`                |
| **Components**    | `themed-dropdown`             | Themed dropdown component    | `class="themed-dropdown"`             |
| **Components**    | `themed-sidebar`              | Themed sidebar component     | `class="themed-sidebar"`              |
| **Components**    | `themed-table-header`         | Themed table header          | `class="themed-table-header"`         |
| **Components**    | `themed-code`                 | Themed code block            | `class="themed-code"`                 |
| **Interactive**   | `interactive-hover`           | Interactive hover effects    | `class="interactive-hover"`           |
| **Focus**         | `focus-themed`                | Themed focus styles          | `class="focus-themed"`                |
| **Transitions**   | `transition-colors`           | Color transitions            | `class="transition-colors"`           |
| **Transitions**   | `transition-transform`        | Transform transitions        | `class="transition-transform"`        |
| **Transitions**   | `transition-all`              | All transitions              | `class="transition-all"`              |

## Performance Notes

-   CSS custom properties provide excellent performance
-   No JavaScript required for theme switching
-   Minimal CSS bundle size with utility-first approach
-   Efficient rendering with GPU-accelerated transforms
