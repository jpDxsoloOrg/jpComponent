import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const DEFAULT_COLORS = [
  '#6366f1', // indigo
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#ef4444', // red
  '#f97316', // orange
  '#f59e0b', // amber
  '#84cc16', // lime
  '#10b981', // emerald
  '#06b6d4', // cyan
  '#3b82f6', // blue
];

type ColorPickerProps = {
  value?: string;
  onChange?: (color: string) => void;
  colors?: string[];
  className?: string;
  label?: string;
};

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  ({ value, onChange, colors = DEFAULT_COLORS, className, label }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-1.5', className)}>
        {label && (
          <span className="text-sm font-medium text-foreground">{label}</span>
        )}
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={label ?? 'Pick a color'}>
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              role="radio"
              aria-checked={value === color}
              aria-label={color}
              onClick={() => onChange?.(color)}
              className={cn(
                'h-7 w-7 rounded-full border-2 transition-all',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'hover:scale-110',
                value === color
                  ? 'border-foreground ring-2 ring-ring ring-offset-2 scale-110'
                  : 'border-transparent'
              )}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';