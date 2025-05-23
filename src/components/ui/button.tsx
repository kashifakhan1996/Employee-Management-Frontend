import * as React from 'react';

import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'default' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant = 'default', size = 'default', ...props },
    ref,
  ) => {
    const base =
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      ghost: 'bg-transparent hover:bg-gray-200',
    };
    const sizes = {
      default: 'h-10 px-4 py-2',
      icon: 'h-10 w-10',
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
