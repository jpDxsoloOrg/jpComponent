# Contributing to @dxsolo/ui

## Getting Started

```bash
git clone https://github.com/jpDxsoloOrg/jpComponent.git
cd jpComponent/my-ui
npm install
```

## Development

```bash
npm run storybook     # Component dev with hot reload (port 6006)
npm run test          # Run tests once
npx vitest            # Run tests in watch mode
npm run lint          # Lint
npm run build         # Build the library
```

## Conventions

### File Naming

- PascalCase for components: `Button.tsx`, `Card.tsx`
- camelCase for utilities: `cn.ts`

### Component Structure

Each component lives in its own directory with co-located tests and stories:

```
lib/components/Button/
  Button.tsx            # Implementation (use forwardRef + cn utility)
  Button.test.tsx       # Tests
  Button.stories.tsx    # Storybook stories
  index.ts              # Re-exports
```

### Styling

Use Tailwind utility classes via CVA variants. No inline styles, no CSS modules. Semantic color tokens (`bg-primary`, `text-foreground`) come from `theme.css`.

### TypeScript

No `any`. Use specific types, generics, or `unknown`.

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add Tooltip component`
- `fix: correct Button focus ring on Safari`
- `docs: update README install instructions`
- `chore: bump vitest to v4`

## Submitting a PR

1. Fork the repo and create a branch (`feat/tooltip` or `fix/button-focus`)
2. Add or update tests and stories for your changes
3. Run `npm run test && npm run build` — both must pass
4. Open a PR against `main` with a clear description of what changed and why
