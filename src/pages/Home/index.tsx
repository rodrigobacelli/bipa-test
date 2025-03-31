import { useEffect } from 'react';

import { CryptosDataTable } from '../../components/CryptosDataTable';
import { LastUpdated } from '../../components/LastUpdated';
import { useGetCryptos } from '../../hooks/services/useGetCryptos';
import { Loader } from '../../components/Loader';

export const Home = () => {
  const { data, isLoading, dataUpdatedAt, refetch, isFetching } =
    useGetCryptos();

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        refetch();
      },
      import.meta.env.VITE_REFETCH_TIME_IN_MINUTES * 60 * 1000
    );
    return () => {
      clearInterval(intervalId);
    };
  });

  if (isLoading) {
    return <Loader />;
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
        {!data ? <div>no data</div> : <CryptosDataTable data={data} />}
      </div>
    </div>
  );
};
