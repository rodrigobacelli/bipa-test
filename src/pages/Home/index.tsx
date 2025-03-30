import { useGetCryptos } from '../../hooks/services/useGetCryptos.ts';

export const Home = () => {
  const { data } = useGetCryptos();

  return <div>Home</div>;
};
