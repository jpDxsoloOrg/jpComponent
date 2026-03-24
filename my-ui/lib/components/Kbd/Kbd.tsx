import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

type KbdProps = React.ComponentPropsWithoutRef<'kbd'>;

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center',
        'min-w-[1.5rem] h-5 px-1.5',
        'text-[11px] font-mono font-medium',
        'bg-muted text-muted-foreground',
        'border border-border rounded',
        'shadow-[0_1px_0_1px] shadow-border/50',
        className
      )}
      {...props}
    />
  )
);

Kbd.displayName = 'Kbd';