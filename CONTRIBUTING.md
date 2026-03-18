# Contributing to @dxsolo/ui

Thanks for your interest in contributing! Here's how to get started.

## Setup

```bash
git clone https://github.com/jpDxsoloOrg/jpComponent.git
cd jpComponent/my-ui
npm install
```

## Development

```bash
# Run Storybook (component development)
npm run storybook

# Run tests
npm run test

# Run tests in watch mode
npx vitest

# Lint
npm run lint

# Build the library
npm run build
```

## Project Structure

```
my-ui/
  lib/                  # Library source (published to npm)
    components/
      Button/
        Button.tsx      # Component implementation
        Button.test.tsx # Tests
        Button.stories.tsx # Storybook stories
        variants.ts     # CVA variant definitions
        index.ts        # Public exports
      Card/
      Input/
      Modal/
      Tabs/
    utils/
      cn.ts             # Class name merge utility
    index.ts            # Package entry point
    theme.css           # Design tokens
  src/                  # Dev app (not published)
  test-consumer/        # Integration test app (sibling directory)
```

## Adding a New Component

1. Create a directory under `lib/components/YourComponent/`
2. Add the component file (`YourComponent.tsx`), using `forwardRef` and the `cn` utility
3. Add an `index.ts` that re-exports the component
4. Add stories (`YourComponent.stories.tsx`)
5. Add tests (`YourComponent.test.tsx`)
6. Export from `lib/index.ts`

## Conventions

- **File naming**: PascalCase for components (`Button.tsx`), camelCase for utilities (`cn.ts`)
- **Component structure**: Each component gets its own directory with co-located tests and stories
- **Styling**: Use Tailwind utility classes via CVA variants. No inline styles, no CSS modules.
- **Types**: No `any`. Use specific types or `unknown`.
- **Exports**: All public components must be exported from `lib/index.ts`
- **Commit messages**: Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`)

## Submitting a PR

1. Fork the repo and create a branch (`feat/my-component` or `fix/button-focus`)
2. Make your changes with tests and stories
3. Run `npm run test` and `npm run build` to verify everything passes
4. Open a PR against `main` with a clear description of what changed and why

## Testing the Package Locally

To test your changes as a consumer would see them:

```bash
cd my-ui
npm run build
cd ../test-consumer
npm install
npm run dev
```
