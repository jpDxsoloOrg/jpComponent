# @dxsolo/ui

A React component library built with Tailwind CSS v4 and class-variance-authority.

## Install

```bash
npm install @dxsolo/ui
```

### Peer dependencies

Your project needs React 18+ and Tailwind CSS 4+:

```bash
npm install react react-dom tailwindcss @tailwindcss/vite
```

## CSS Setup

Add these three lines to your main CSS file (e.g. `src/index.css`):

```css
@import "tailwindcss";
@import "@dxsolo/ui/theme.css";

@source "../node_modules/@dxsolo/ui";
```

The `@source` directive tells Tailwind to scan the library for class names. Without it, components render unstyled.

Add the Tailwind Vite plugin to your `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## Usage

```tsx
import { Button, Card, CardContent, Input } from '@dxsolo/ui';

function App() {
  return (
    <Card>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button intent="primary">Submit</Button>
      </CardContent>
    </Card>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Variants: `primary`, `secondary`, `destructive`, `ghost`. Sizes: `sm`, `md`, `lg`. |
| `Card` | Container with `CardHeader`, `CardContent`, `CardFooter` subcomponents. |
| `Input` | Text input with label, helper text, and error states. |
| `Modal` | Dialog overlay with focus trapping. |
| `Tabs` | Tabbed interface with `TabsList`, `TabsTrigger`, `TabsContent`. |

## Utilities

`cn(...classes)` — merges Tailwind classes with conflict resolution (powered by `clsx` + `tailwind-merge`).

## Storybook

Browse all components and their variants:

```bash
cd my-ui
npm install
npm run storybook
```

## License

[MIT](LICENSE)
