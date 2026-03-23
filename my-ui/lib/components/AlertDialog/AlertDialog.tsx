import { forwardRef, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import { Button } from '../Button';

type AlertDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  intent?: 'destructive' | 'primary';
  loading?: boolean;
  className?: string;
};

export const AlertDialog = forwardRef<HTMLDivElement, AlertDialogProps>(
  (
    {
      open,
      onClose,
      onConfirm,
      title,
      description,
      confirmLabel = 'Confirm',
      cancelLabel = 'Cancel',
      intent = 'destructive',
      loading = false,
      className,
    },
    ref
  ) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);
    const cancelRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => contentRef.current as HTMLDivElement);

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
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);

      // Focus the cancel button — the safe action — not the destructive one
      requestAnimationFrame(() => {
        cancelRef.current?.focus();
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
        <div
          className="fixed inset-0 bg-foreground/40 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          ref={contentRef}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="alert-dialog-title"
          aria-describedby={description ? 'alert-dialog-description' : undefined}
          className={cn(
            'relative z-50 w-full max-w-md rounded-xl border border-border',
            'bg-background p-6 shadow-lg',
            className
          )}
        >
          <h2 id="alert-dialog-title" className="text-lg font-semibold text-foreground">
            {title}
          </h2>
          {description && (
            <p id="alert-dialog-description" className="mt-2 text-sm text-muted-foreground">
              {description}
            </p>
          )}
          <div className="mt-6 flex justify-end gap-3">
            <Button
              ref={cancelRef}
              intent="secondary"
              onClick={onClose}
              disabled={loading}
            >
              {cancelLabel}
            </Button>
            <Button
              intent={intent}
              onClick={onConfirm}
              disabled={loading}
            >
              {loading ? 'Deleting...' : confirmLabel}
            </Button>
          </div>
        </div>
      </div>,
      document.body
    );
  }
);

AlertDialog.displayName = 'AlertDialog';