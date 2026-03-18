// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    !isStorybook &&
      dts({
        tsconfigPath: './tsconfig.lib.json',
        include: ['lib'],
        rollupTypes: true,
      }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});