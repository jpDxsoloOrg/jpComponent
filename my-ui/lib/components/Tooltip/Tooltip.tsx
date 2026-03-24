import { useState, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement<{ onMouseEnter?: React.MouseEventHandler; onMouseLeave?: React.MouseEventHandler; onFocus?: React.FocusEventHandler; onBlur?: React.FocusEventHandler }>;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
};

const positionClasses: Record<string, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

export function Tooltip({
  content,
  children,
  position = 'top',
  delay = 400,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVisible(false);
  }, []);

  return (
    <span className="relative inline-flex">
      <span
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </span>
      {visible && (
        <span
          role="tooltip"
          className={cn(
            'absolute z-50 whitespace-nowrap',
            'rounded-md px-2 py-1',
            'text-xs font-medium',
            'bg-foreground text-background',
            'shadow-md',
            'pointer-events-none',
            'animate-in fade-in-0 duration-150',
            positionClasses[position],
            className
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}