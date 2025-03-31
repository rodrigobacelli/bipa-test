export const formatBitcoin = (valueInBitcoins: number) => {
  return `${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 9, maximumFractionDigits: 9 }).format(valueInBitcoins)} BTC`;
};
