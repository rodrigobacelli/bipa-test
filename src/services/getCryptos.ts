import { Crypto } from '../types/cryptos';

export const getCryptos = async (): Promise<Crypto[]> => {
  const response = await fetch(
    'https://mempool.space/api/v1/lightning/nodes/rankings/connectivity'
  );

  return await response.json();
};
