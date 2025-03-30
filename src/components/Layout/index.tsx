export type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[];
};

export const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};
