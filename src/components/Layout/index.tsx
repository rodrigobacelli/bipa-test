import { Header } from '../Header';
import { Container } from '../Container';
import { Footer } from '../Footer';

export type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[];
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      <Container className="py-4">{children}</Container>
      <Footer />
    </div>
  );
};
