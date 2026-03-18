// lib/components/Modal/Modal.tsx
import { forwardRef, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
 
type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title: string;
  description?: string;
};
 
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onClose, children, className, title, description }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);
 
    // Expose the content div to consumers via the forwarded ref
    useImperativeHandle(ref, () => contentRef.current as HTMLDivElement);
 
    // Trap focus inside the modal
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
          return;
        }
        if (e.key !== 'Tab') return;
 
        const modal = contentRef.current;
        if (!modal) return;
 
        const focusable = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
 
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      },
      [onClose]
    );
 
    useEffect(() => {
      if (!open) return;
 
      // Save the currently focused element and lock scroll
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
 
      // Focus the first focusable element inside the modal
      requestAnimationFrame(() => {
        const focusable = contentRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusable?.[0]?.focus();
      });
 
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }, [open, handleKeyDown]);
 
    if (!open) return null;
 
    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-foreground/40 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        {/* Content */}
        <div
          ref={contentRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby={description ? 'modal-description' : undefined}
          className={cn(
            'relative z-50 w-full max-w-lg rounded-xl border border-border',
            'bg-background p-6 shadow-lg',
            className
          )}
        >
          <h2 id="modal-title" className="text-lg font-semibold text-foreground">
            {title}
          </h2>
          {description && (
            <p id="modal-description" className="mt-1 text-sm text-muted-foreground">
              {description}
            </p>
          )}
          <div className="mt-4">{children}</div>
        </div>
      </div>,
      document.body
    );
  }
);
 
Modal.displayName = 'Modal';