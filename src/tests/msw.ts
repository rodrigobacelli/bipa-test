import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import { mockedCryptos } from './mocks/mockedCryptos';

const handlers = [
  http.get(
    'https://mempool.space/api/v1/lightning/nodes/rankings/connectivity',
    () => {
      return HttpResponse.json(mockedCryptos);
    }
  ),
];

export const server = setupServer(...handlers);
