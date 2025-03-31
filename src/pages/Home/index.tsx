import { useGetCryptos } from '../../hooks/services/useGetCryptos.ts';
import { CryptosDataTable } from '../../components/CryptosDataTable';

export const Home = () => {
  const { data, isLoading } = useGetCryptos();

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
        Data:
        <CryptosDataTable data={data} />
      </div>
    </div>
  );
};
