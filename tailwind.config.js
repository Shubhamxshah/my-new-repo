import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@adminide-stack/vite-visualeditor/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                success: 'hsl(var(--success))',
                warning: 'hsl(var(--warning))',
                error: 'hsl(var(--error))',
                info: 'hsl(var(--info))',
                'brand-primary': 'hsl(var(--brand-primary))',
                'brand-secondary': 'hsl(var(--brand-secondary))',
                'brand-accent': 'hsl(var(--brand-accent))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                themed: 'calc(var(--radius))',
                'themed-lg': 'calc(var(--radius) * 1.5)',
                'themed-xl': 'calc(var(--radius) * 2)',
            },
            boxShadow: {
                'themed-sm': 'var(--shadow-sm)',
                'themed-md': 'var(--shadow-md)',
                'themed-lg': 'var(--shadow-lg)',
                'themed-xl': 'var(--shadow-xl)',
            },
            fontFamily: {
                inter: 'var(--font-family)',
            },
        },
    },
    plugins: [],
};
