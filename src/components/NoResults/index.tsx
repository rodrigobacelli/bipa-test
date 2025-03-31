import { twMerge } from 'tailwind-merge';

import { RiEyeOffLine } from 'react-icons/ri';

export type NoResultsProps = {
  id?: string;
  className?: string;
};

export const NoResults = ({ className }: NoResultsProps) => {
  return (
    <div
      className={twMerge(
        'flex h-full w-full items-center justify-center',
        className
      )}
      id="no-content"
    >
      <p className="flex flex-col items-center gap-2">
        <RiEyeOffLine className="h-8 w-8" />
        No results found.
      </p>
    </div>
  );
};
