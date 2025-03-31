import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

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
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="flex w-full items-center justify-end gap-4">
      {!isUpdating ? (
        <p className="text-sm text-gray-700">Updated {time} ago</p>
      ) : null}
      <button onClick={onUpdate} disabled={isUpdating}>
        {isUpdating ? 'Updating' : 'Update'}
      </button>
    </div>
  );
};
