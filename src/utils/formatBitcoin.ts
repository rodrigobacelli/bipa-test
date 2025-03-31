export const formatBitcoin = (valueInBitcoins: number) => {
  return `${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 8, maximumFractionDigits: 8 }).format(valueInBitcoins)} BTC`;
};
