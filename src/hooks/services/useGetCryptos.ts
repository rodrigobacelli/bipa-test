import { useQuery } from '@tanstack/react-query';

import { getCryptos } from '../../services/getCryptos';

export const useGetCryptos = () => {
  const { data, isFetching, isLoading, refetch, dataUpdatedAt } = useQuery({
    queryKey: ['todos'],
    queryFn: getCryptos,
  });

  return {
    data,
    isFetching,
    isLoading,
    refetch,
    dataUpdatedAt,
  };
};
