// lib/components/Badge/Badge.tsx
import { forwardRef } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { badgeVariants } from './variants';

type BadgeProps = React.ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof badgeVariants>;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, intent, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ intent, size }), className)}
      {...props}
    />
  )
);

Badge.displayName = 'Badge';