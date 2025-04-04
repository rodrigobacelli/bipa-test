import { twMerge } from 'tailwind-merge';

import LoaderIcon from '../../assets/loader.svg?react';

export type LoaderProps = {
  className?: string;
  size?: number;
};

export const Loader = ({ className, size = 40 }: LoaderProps) => {
  return (
    <div
      className={twMerge(
        'flex h-full w-full items-center justify-center',
        className
      )}
      data-testid="loader"
    >
      <LoaderIcon
        className="animate-spin text-gray-700 dark:text-gray-400"
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};
