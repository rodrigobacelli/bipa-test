import { useEffect, useState } from 'react';

import { formatDistanceToNow } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { RxUpdate } from 'react-icons/rx';

import { Button } from '../Button';

export type LastUpdatedProps = {
  onUpdate?: () => void;
  lastUpdatedDate: Date;
  isUpdating?: boolean;
};

export const LastUpdated = ({
  onUpdate,
  lastUpdatedDate,
  isUpdating,
}: LastUpdatedProps) => {
  const [time, setTime] = useState<string>(
    lastUpdatedDate ? formatDistanceToNow(lastUpdatedDate) : ''
  );

  if (!lastUpdatedDate) {
    return null;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (lastUpdatedDate) {
        setTime(formatDistanceToNow(lastUpdatedDate));
      }
    }, 60 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="flex w-full items-center justify-end gap-4">
      {!isUpdating ? (
        <p className="text-sm text-gray-700">Updated {time} ago</p>
      ) : null}
      <Button
        onClick={onUpdate}
        disabled={isUpdating}
        startIcon={({ className, ...startIconProps }) => (
          <RxUpdate
            {...startIconProps}
            className={twMerge(className, isUpdating && 'animate-spin')}
          />
        )}
      >
        Update
      </Button>
    </div>
  );
};
