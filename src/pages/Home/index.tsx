import { useEffect } from 'react';

import { CryptosDataTable } from '../../components/CryptosDataTable';
import { LastUpdated } from '../../components/LastUpdated';
import { Loader } from '../../components/Loader';
import { useGetCryptos } from '../../hooks/services/useGetCryptos';
import { Card } from '../../components/Card';

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
    <section className="flex w-full flex-col gap-4 pt-4">
      <LastUpdated
        lastUpdatedDate={new Date(dataUpdatedAt)}
        onUpdate={refetch}
        isUpdating={isFetching}
      />
      <Card className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold text-gray-900">
          Top 100 connected nodes
        </h1>
        {!data ? <div>no data</div> : <CryptosDataTable data={data} />}
      </Card>
    </section>
  );
};
