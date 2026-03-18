// lib/components/Tabs/Tabs.tsx
import {
    createContext,
    forwardRef,
    useCallback,
    useContext,
    useId,
    useState,
  } from 'react';
  import { cn } from '../../utils/cn';
   
  // --- Context ---
  type TabsContextValue = {
    activeTab: string;
    setActiveTab: (value: string) => void;
    baseId: string;
  };
   
  const TabsContext = createContext<TabsContextValue | null>(null);
   
  function useTabsContext() {
    const context = useContext(TabsContext);
    if (!context) {
      throw new Error('Tabs compound components must be used within <Tabs>');
    }
    return context;
  }
   
  // --- Root ---
  type TabsProps = React.ComponentPropsWithoutRef<'div'> & {
    defaultValue: string;
    value?: string;
    onValueChange?: (value: string) => void;
  };
   
  export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
    ({ defaultValue, value, onValueChange, className, children, ...props }, ref) => {
      const [internalValue, setInternalValue] = useState(defaultValue);
      const activeTab = value ?? internalValue;
      const baseId = useId();
   
      const setActiveTab = useCallback(
        (newValue: string) => {
          if (value === undefined) setInternalValue(newValue);
          onValueChange?.(newValue);
        },
        [value, onValueChange]
      );
   
      return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, baseId }}>
          <div ref={ref} className={cn('w-full', className)} {...props}>
            {children}
          </div>
        </TabsContext.Provider>
      );
    }
  );
  Tabs.displayName = 'Tabs';
   
  // --- TabsList ---
  export const TabsList = forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<'div'>
  >(({ className, children, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const triggers = Array.from(
        e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      );
      const current = triggers.findIndex((t) => t === document.activeElement);
      if (current === -1) return;
   
      let next = current;
      if (e.key === 'ArrowRight') next = (current + 1) % triggers.length;
      if (e.key === 'ArrowLeft') next = (current - 1 + triggers.length) % triggers.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = triggers.length - 1;
   
      if (next !== current) {
        e.preventDefault();
        triggers[next].focus();
        triggers[next].click();
      }
    };
   
    return (
      <div
        ref={ref}
        role="tablist"
        onKeyDown={handleKeyDown}
        className={cn(
          'inline-flex items-center gap-1 rounded-lg bg-muted p-1',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  });
  TabsList.displayName = 'TabsList';
   
  // --- TabsTrigger ---
  type TabsTriggerProps = React.ComponentPropsWithoutRef<'button'> & {
    value: string;
  };
   
  export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ value, className, children, ...props }, ref) => {
      const { activeTab, setActiveTab, baseId } = useTabsContext();
      const isActive = activeTab === value;
   
      return (
        <button
          ref={ref}
          role="tab"
          type="button"
          id={`${baseId}-trigger-${value}`}
          aria-selected={isActive}
          aria-controls={`${baseId}-content-${value}`}
          tabIndex={isActive ? 0 : -1}
          onClick={() => setActiveTab(value)}
          className={cn(
            'inline-flex items-center justify-center rounded-md px-3 py-1.5',
            'text-sm font-medium transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            isActive
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground',
            className
          )}
          {...props}
        >
          {children}
        </button>
      );
    }
  );
  TabsTrigger.displayName = 'TabsTrigger';
   
  // --- TabsContent ---
  type TabsContentProps = React.ComponentPropsWithoutRef<'div'> & {
    value: string;
  };
   
  export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
    ({ value, className, children, ...props }, ref) => {
      const { activeTab, baseId } = useTabsContext();
      if (activeTab !== value) return null;
   
      return (
        <div
          ref={ref}
          role="tabpanel"
          id={`${baseId}-content-${value}`}
          aria-labelledby={`${baseId}-trigger-${value}`}
          tabIndex={0}
          className={cn('mt-2 focus-visible:outline-none', className)}
          {...props}
        >
          {children}
        </div>
      );
    }
  );
  TabsContent.displayName = 'TabsContent';