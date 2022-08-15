import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useBooks from '../../provider/book-provider';
import { BookIcon, ArchiveIcon, ShoppingCartIcon } from '../../assets/icons';
import { Button } from '../../components/button';
import { Sidebar } from '../../components/sidebar';
import { GITHUB_PROJECT_URL } from '../../constant';
import { ErrorPage, LoadingPage } from '../../pages';
import { routes, ROUTES_PATH } from '../../routes';
import Styles from './dynamic-template.module.scss';
import {
  EVENT_LISTENERS,
  useEventListener,
} from '../../hooks/useEventListener';

const DynamicTemplate = () => {
  const {
    state: { errorMessage, loading },
  } = useBooks();

  const commonPagesStyle = useRef<React.CSSProperties>({
    padding: '1.5rem 2rem',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  });

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarChange = (e: any) => {
    const currentWindowWidth = e.target.innerWidth;
    setSidebarOpen(currentWindowWidth >= 1024);
  };

  useEventListener({
    eventType: EVENT_LISTENERS.RESIZE,
    cbFunc: handleSidebarChange,
  });

  if (loading) {
    return <LoadingPage additionalStyle={{ ...commonPagesStyle.current }} />;
  }

  if (errorMessage) {
    return (
      <ErrorPage
        title={errorMessage}
        additionalStyle={{ ...commonPagesStyle.current }}
      />
    );
  }

  return (
    <div className={Styles.dynamicTemplate}>
      {sidebarOpen && (
        <Sidebar
          burgerMenuCbFunc={() => {
            setSidebarOpen((prevState) => !prevState);
          }}
          links={[
            {
              label: 'Products',
              url: ROUTES_PATH.PRODUCTS,
              icon: <BookIcon />,
            },
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
      )}

      <div
        className={`${Styles.routesWrapper} ${
          sidebarOpen ? Styles.applyOverlay : ''
        }`}
      >
        <div onClick={() => setSidebarOpen((prevState) => !prevState)}>
          <button>Open sidebar</button>
        </div>

        <Routes>
          {routes.map(({ component: Element, path }, index: number) => (
            <Route
              key={`${path}-#${index}`}
              {...{ path }}
              element={<Element additionalStyle={commonPagesStyle.current} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default DynamicTemplate;
