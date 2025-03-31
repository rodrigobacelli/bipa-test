import { twMerge } from 'tailwind-merge';

import { MdErrorOutline } from 'react-icons/md';
import { Button } from '../Button';

export type ErrorProps = {
  id?: string;
  className?: string;
  onRetry?: () => void;
};

export const Error = ({ className, onRetry }: ErrorProps) => {
  return (
    <div
      className={twMerge(
        'flex h-full w-full items-center justify-center',
        className
      )}
      id="no-content"
    >
      <p className="flex flex-col items-center gap-2">
        <MdErrorOutline className="h-8 w-8" />
        An error occurred. Please try again later.
        <Button onClick={onRetry}>Retry</Button>
      </p>
    </div>
  );
};
