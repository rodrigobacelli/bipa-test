import { describe, it, expect, beforeEach, afterEach, afterAll } from 'vitest';
import { server } from '../tests/msw';
import { mockedCryptos } from '../tests/mocks/mockedCryptos.ts';

import { getCryptos } from './getCryptos.ts';

beforeEach(async () => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('services/getCryptos', () => {
  it('should fetch the cryptos data', async () => {
    const response = await getCryptos();

    expect(response).toEqual(mockedCryptos);
  });
});
