// lib/components/Button/Button.tsx
import { forwardRef } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { buttonVariants } from './variants';
 
type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
 
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ intent, size }), className)}
        {...props}
      >
        {leftIcon && <span className="mr-2 inline-flex shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2 inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);
 
Button.displayName = 'Button';