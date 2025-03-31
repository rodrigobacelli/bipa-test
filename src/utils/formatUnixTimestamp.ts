import { format } from 'date-fns/format';

export const formatUnixTimestamp = (timestamp: number) => {
  return format(new Date(timestamp * 1000), 'MM/dd/yyyy HH:mm:ss');
};
