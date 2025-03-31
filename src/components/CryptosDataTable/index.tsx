import DataTable from 'react-data-table-component';

import type { Crypto } from '../../types/cryptos.ts';

export type DataTableProps = {
  data?: Crypto[];
};

const columns = [
  {
    key: 'publicKey',
    name: 'Public Key',
    selector: (row: Crypto) => row.publicKey,
  },
  {
    key: 'alias',
    name: 'Alias',
    selector: (row: Crypto) => row.alias,
  },
  {
    key: 'channels',
    name: 'Channels',
    selector: (row: Crypto) => row.channels,
    right: true,
  },
  {
    key: 'capacity',
    name: 'Capacity',
    selector: (row: Crypto) =>
      `${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 9, maximumFractionDigits: 9 }).format(row.capacity / 100000000)} BTC`,
    right: true,
  },
  {
    key: 'firstSeen',
    name: 'First Seen',
    selector: (row: Crypto) => row.firstSeen,
  },
  {
    key: 'updatedAt',
    name: 'Updated At',
    selector: (row: Crypto) => row.updatedAt,
  },
  {
    key: 'country',
    name: 'Country',
    selector: (row: Crypto) => row.country?.en || '',
  },
];

export const CryptosDataTable = ({ data = [] }: DataTableProps) => {
  return <DataTable columns={columns} data={data} />;
};
