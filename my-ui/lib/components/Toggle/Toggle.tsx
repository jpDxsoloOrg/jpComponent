import { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

type ToggleProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'role' | 'type'> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  size?: 'sm' | 'md';
};

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, checked = false, onCheckedChange, label, size = 'md', id: externalId, ...props }, ref) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;

    const trackSize = size === 'sm' ? 'h-5 w-9' : 'h-6 w-11';
    const thumbSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';
    const thumbTranslate = size === 'sm'
      ? (checked ? 'translate-x-[18px]' : 'translate-x-[3px]')
      : (checked ? 'translate-x-[22px]' : 'translate-x-[3px]');

    return (
      <div className="flex items-center gap-2">
        <button
          ref={ref}
          id={id}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={label ? `${id}-label` : undefined}
          onClick={() => onCheckedChange?.(!checked)}
          className={cn(
            trackSize,
            'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent',
            'transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            checked ? 'bg-primary' : 'bg-muted',
            className
          )}
          {...props}
        >
          <span
            className={cn(
              thumbSize,
              'pointer-events-none inline-block rounded-full bg-white shadow-sm',
              'transition-transform duration-200',
              thumbTranslate
            )}
            style={{ marginTop: size === 'sm' ? '2px' : '3px' }}
          />
        </button>
        {label && (
          <label
            id={`${id}-label`}
            htmlFor={id}
            className="text-sm text-foreground select-none cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';