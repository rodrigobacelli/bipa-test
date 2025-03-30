import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export type LayoutProps = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: LayoutProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
