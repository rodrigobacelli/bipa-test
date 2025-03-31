import * as React from 'react';

import { twMerge } from 'tailwind-merge';

export type CardProps = React.HTMLAttributes<unknown> & {
  children?: React.ReactNode | React.ReactNode[];
  as?: keyof React.JSX.IntrinsicElements;
};

export const Card = ({
  children,
  className,
  as: Component = 'div',
  ...allProps
}: CardProps) => {
  return (
    <Component
      {...allProps}
      className={twMerge(
        'rounded-lg bg-white p-4 shadow-md ring ring-gray-900/5',
        className
      )}
    >
      {children}
    </Component>
  );
};
