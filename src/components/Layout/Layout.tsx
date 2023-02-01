import { FunctionComponent } from 'react';
import { ILayoutProps } from './types';
// import './styles.scss';

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div
      className="wrapper"
      style={{
        width: '100%',
        padding: '15px 16px',
        margin: ' 0 auto',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
