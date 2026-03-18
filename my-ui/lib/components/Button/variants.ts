// lib/components/Button/variants.ts
import { cva } from 'class-variance-authority';
 
export const buttonVariants = cva(
  // Base styles applied to every button
  [
    'inline-flex items-center justify-center',
    'font-medium rounded-md',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      intent: {
        primary: 'bg-primary text-white hover:bg-primary-hover',
        secondary: 'bg-secondary text-foreground hover:bg-secondary-hover',
        destructive: 'bg-destructive text-white hover:bg-destructive-hover',
        ghost: 'bg-transparent text-foreground hover:bg-muted',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    compoundVariants: [
      {
        intent: 'destructive',
        size: 'sm',
        class: 'text-xs',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);