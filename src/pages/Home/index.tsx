import { useGetCryptos } from '../../hooks/services/useGetCryptos.ts';
import { CryptosDataTable } from '../../components/CryptosDataTable';
import { LastUpdated } from '../../components/LastUpdated';

export const Home = () => {
  const { data, isLoading, dataUpdatedAt, refetch, isFetching } =
    useGetCryptos();

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
