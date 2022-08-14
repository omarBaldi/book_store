import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import useBooks from '../../provider/book-provider';
import { BookIcon, ArchiveIcon, ShoppingCartIcon } from '../../assets/icons';
import { Button } from '../../components/button';
import { Sidebar } from '../../components/sidebar';
import { GITHUB_PROJECT_URL } from '../../constant';
import { ErrorPage, LoadingPage } from '../../pages';
import Styles from './dynamic-template.module.scss';
import { routes, ROUTES_PATH } from '../../routes';

const DynamicTemplate = () => {
  const {
    state: { errorMessage, loading },
  } = useBooks();

  const commonPagesStyle = useRef<React.CSSProperties>({
    padding: '1.5rem 2rem',
    width: '100%',
  });

  if (loading) return <LoadingPage />;
  if (errorMessage) return <ErrorPage title={errorMessage} />;

  return (
    <div className={Styles.dynamicTemplate}>
      <Sidebar
        links={[
          { label: 'Products', url: ROUTES_PATH.PRODUCTS, icon: <BookIcon /> },
          {
            label: 'Categories',
            url: ROUTES_PATH.CATEGORIES,
            icon: <ArchiveIcon />,
          },
          {
            label: 'Basket',
            url: ROUTES_PATH.BASKET,
            icon: <ShoppingCartIcon />,
          },
        ]}
        additionalContent={
          <Button url={GITHUB_PROJECT_URL}>
            <p>Link to github profile</p>
          </Button>
        }
      />

      <div className={Styles.routesWrapper}>
        <Routes>
          {routes.map(({ component: Element, path }) => (
            <Route
              {...{ path }}
              element={
                <Element additionalStyle={{ ...commonPagesStyle.current }} />
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default DynamicTemplate;
