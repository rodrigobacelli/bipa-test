import { format } from 'date-fns/format';

import { Container } from '../Container';

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center border-t bg-gray-200 py-2">
      <Container className="flex items-center justify-center">
        <p className="text-sm">CryptoWatcher @ {format(new Date(), 'yyyy')}</p>
      </Container>
    </footer>
  );
};
