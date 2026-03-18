# @dxsolo/ui

Accessible React components styled with Tailwind CSS v4 — ready to drop into any project.

## Install

```bash
npm install @dxsolo/ui
```

## CSS Setup

Add these three lines to your main CSS file:

```css
@import "tailwindcss";
@import "@dxsolo/ui/theme.css";

@source "../node_modules/@dxsolo/ui";
```

The `@source` directive tells Tailwind to scan the library for class names. Without it, components render unstyled.

## Usage

```tsx
import { Button, Card, CardContent } from '@dxsolo/ui';

function App() {
  return (
    <Card>
      <CardContent>
        <Button intent="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Storybook

Browse all components and their variants: [Storybook (coming soon)](#)

## License

[MIT](LICENSE)
