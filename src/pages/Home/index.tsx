import { useEffect } from 'react';

import { CryptosDataTable } from '../../components/CryptosDataTable';
import { LastUpdated } from '../../components/LastUpdated';
import { useGetCryptos } from '../../hooks/services/useGetCryptos.ts';

export const Home = () => {
  const { data, isLoading, dataUpdatedAt, refetch, isFetching } =
    useGetCryptos();

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        refetch();
      },
      10 * 60 * 1000
    );
    return () => {
      clearInterval(intervalId);
    };
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  return (
    <div>
      Home
      <div>
        <LastUpdated
          lastUpdatedDate={new Date(dataUpdatedAt)}
          onUpdate={refetch}
          isUpdating={isFetching}
        />
        <CryptosDataTable data={data} />
      </div>
    </div>
  );
};
