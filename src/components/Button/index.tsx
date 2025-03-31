import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: React.FunctionComponent<{ className?: string }>;
  endIcon?: React.FunctionComponent<{ className?: string }>;
};

export const Button = ({
  className,
  children,
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={twMerge(
        'flex items-center gap-1 rounded-sm border px-2 py-1 text-sm enabled:cursor-pointer',
        'border-gray-900 text-gray-900',
        'enabled:hover:bg-gray-900/20',
        'enabled:focus:bg-gray-800/10',
        'disabled:border-gray-500 disabled:text-gray-500',
        className
      )}
    >
      {StartIcon ? <StartIcon /> : null}
      {children}
      {EndIcon ? <EndIcon /> : null}
    </button>
  );
};
