import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  [
    'inline-flex items-center',
    'text-xs font-medium',
    'rounded-full px-2 py-0.5',
  ],
  {
    variants: {
      intent: {
        default: 'bg-muted text-foreground',
        primary: 'bg-primary/10 text-primary',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-amber-100 text-amber-700',
        danger: 'bg-red-100 text-red-700',
        info: 'bg-blue-100 text-blue-700',
      },
      size: {
        sm: 'text-xs px-1.5 py-0.5',
        md: 'text-xs px-2 py-0.5',
        lg: 'text-sm px-2.5 py-1',
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);