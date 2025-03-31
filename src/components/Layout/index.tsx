import { Header } from '../Header';
import { Container } from '../Container';
import { Footer } from '../Footer';

export type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[];
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-50">
      <Header />
      <Container className="flex-1 py-4">{children}</Container>
      <Footer />
    </div>
  );
};
