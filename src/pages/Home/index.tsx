import { useGetCryptos } from '../../hooks/services/useGetCryptos.ts';

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
        <ul>
          {data.map((item) => (
            <li key={item.publicKey}>{item.publicKey}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
