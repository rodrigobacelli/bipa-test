import { TbEyeBitcoin } from 'react-icons/tb';
import { Container } from '../Container';

export const Header = () => {
  return (
    <header className="flex w-full justify-center border-b py-4">
      <Container className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <TbEyeBitcoin className="h-10 w-10" /> CryptoWatcher
        </div>
      </Container>
    </header>
  );
};
