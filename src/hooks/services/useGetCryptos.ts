import { useQuery } from '@tanstack/react-query';

import { getCryptos } from '../../services/getCryptos.ts';

export const useGetCryptos = () => {
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: getCryptos,
  });

  console.log(data);

  return {
    data,
    isFetching,
    isLoading,
    refetch,
  };
};
