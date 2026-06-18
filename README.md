# Vite Visual Editor

A powerful visual editor component that can be wrapped around any React application to provide visual editing capabilities.

## Features

-   🎨 **Visual Editing**: Click and edit elements directly in your app
-   🎯 **Component Library**: Drag and drop pre-built components
-   🎨 **Style Panel**: Real-time CSS property editing
-   📱 **Responsive Design**: Test different viewport sizes
-   🎭 **Multiple Themes**: Built-in theme system (Default, Airbnb, Slack, GitHub, Spotify)
-   🌙 **Dark Mode**: Toggle between light and dark modes
-   📋 **Change Tracking**: Track all modifications for AI integration
-   🔄 **Undo/Redo**: Full history management

## Installation

```bash
npm install @your-org/vite-visual-editor
```

## Basic Usage

Wrap your existing React application with the `ViteVisualEditor` component:

```tsx
import { ViteVisualEditor } from '@your-org/vite-visual-editor';
import YourApp from './YourApp';

function App() {
    return (
        <ViteVisualEditor
            defaultEnabled={false}
            onSave={(changes) => {
                console.log('Changes to save:', changes);
                // Send changes to your backend
            }}
        >
            <YourApp />
        </ViteVisualEditor>
    );
}
```

## Props

### ViteVisualEditor Props

| Prop             | Type                | Default | Description                       |
| ---------------- | ------------------- | ------- | --------------------------------- |
| `children`       | `React.ReactNode`   | -       | Your React application to wrap    |
| `defaultEnabled` | `boolean`           | `false` | Whether the editor starts enabled |
| `onSave`         | `(changes) => void` | -       | Callback when changes are saved   |

### Change Object Structure

```typescript
interface ElementChange {
    id: string;
    elementId: string;
    type: 'text' | 'style' | 'attribute';
    property?: string;
    oldValue: string;
    newValue: string;
    timestamp: number;
    location: {
        file: string;
        line: number;
        column: number;
    };
    element: {
        tagName: string;
        className: string;
        selector: string;
    };
}

interface StructuralChange {
    id: string;
    type: 'insert' | 'delete' | 'move';
    elementId: string;
    parentId?: string;
    siblingId?: string;
    position?: 'before' | 'after' | 'append';
    html?: string;
    timestamp: number;
    location: {
        file: string;
        line: number;
        column: number;
    };
}
```

## How It Works

1. **Wrapper Mode**: When `isEnabled` is `false`, only your app renders
2. **Editor Mode**: When `isEnabled` is `true`, the full editor interface appears
3. **Auto-Detection**: The editor automatically makes interactive elements editable
4. **Change Tracking**: All modifications are tracked and can be sent to AI/backend

## Editor Features

### Visual Editing

-   Click any element to select it
-   Double-click text elements to edit inline
-   Drag elements to reorder or reposition
-   Delete elements with keyboard shortcuts

### Component Library

-   Pre-built components (Hero sections, Navigation, Forms, etc.)
-   Drag and drop or click to insert
-   Automatically positioned and styled

### Style Panel

-   Real-time CSS property editing
-   Organized by categories (Layout, Typography, Colors, etc.)
-   Visual color picker and range sliders
-   Auto-completion for CSS values

### Responsive Design

-   Switch between Desktop, Tablet, and Mobile views
-   Test your designs across different screen sizes

### Themes

-   5 built-in themes with unique color schemes and styling
-   Dark/Light mode support for all themes
-   Easy theme switching

### Change Tracking

-   Every modification is tracked
-   Detailed change history with timestamps
-   Change history with timestamps and detailed information

## Integration Examples

### With Next.js

```tsx
// pages/_app.tsx
import { ViteVisualEditor } from '@your-org/vite-visual-editor';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    const isEditor = process.env.NODE_ENV === 'development';

    if (isEditor) {
        return (
            <ViteVisualEditor defaultEnabled={false}>
                <Component {...pageProps} />
            </ViteVisualEditor>
        );
    }

    return <Component {...pageProps} />;
}
```

### With Create React App

```tsx
// src/App.tsx
import { ViteVisualEditor } from '@your-org/vite-visual-editor';
import YourMainApp from './YourMainApp';

function App() {
    const showEditor = process.env.NODE_ENV === 'development';

    return showEditor ? (
        <ViteVisualEditor defaultEnabled={false}>
            <YourMainApp />
        </ViteVisualEditor>
    ) : (
        <YourMainApp />
    );
}
```

### With Backend Integration

```tsx
import { ViteVisualEditor } from '@your-org/vite-visual-editor';
import { saveChangesToBackend, exportToFile } from './api';

function App() {
    return (
        <ViteVisualEditor
            defaultEnabled={false}
            onSave={async (changes) => {
                try {
                    await saveChangesToBackend(changes);
                    console.log('Changes saved successfully');
                } catch (error) {
                    console.error('Failed to save changes:', error);
                }
            }}
        >
            <YourApp />
        </ViteVisualEditor>
    );
}
```

## Keyboard Shortcuts

-   `Escape` - Deselect current element
-   `Delete` / `Backspace` - Delete selected element
-   `Ctrl/Cmd + Z` - Undo
-   `Ctrl/Cmd + Y` - Redo
-   `Ctrl/Cmd + D` - Deselect element

## Browser Support

-   Chrome 90+
-   Firefox 88+
-   Safari 14+
-   Edge 90+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

# react-visual-base
