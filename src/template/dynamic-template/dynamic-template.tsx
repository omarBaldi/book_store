import React, { useRef, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useBooks from '../../provider/book-provider';
import {
  EVENT_LISTENERS,
  useEventListener,
} from '../../hooks/useEventListener';
import {
  BookIcon,
  ArchiveIcon,
  ShoppingCartIcon,
  MenuIcon,
  CloseIcon,
} from '../../assets';
import { Button } from '../../components/button';
import { Sidebar } from '../../components/sidebar';
import { GITHUB_PROJECT_URL, LARGE_DEVICES_WIDTH } from '../../constant';
import { ErrorPage, LoadingPage } from '../../pages';
import { routes, ROUTES_PATH } from '../../routes';
import { BUTTON_SIZES } from '../../components/button/dto';
import Styles from './dynamic-template.module.scss';

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

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(
    window.innerWidth >= LARGE_DEVICES_WIDTH
  );

  const handleSidebarChange = (e: any) => {
    const currentWindowWidth = e.target.innerWidth;
    setSidebarOpen(currentWindowWidth >= LARGE_DEVICES_WIDTH);
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
        <div className={Styles.buttonMenuWrapper}>
          <Button
            size={BUTTON_SIZES.SMALL}
            cbFunc={() => setSidebarOpen((prevState) => !prevState)}
            additionalStyle={{ width: 'auto' }}
          >
            {sidebarOpen ? (
              <CloseIcon className={Styles.burgerIcon} />
            ) : (
              <MenuIcon className={Styles.burgerIcon} />
            )}
          </Button>
        </div>

        <Routes>
          {routes.map(({ component: Element, path }, index: number) => (
            <Route
              key={`${path}-#${index}`}
              {...{ path }}
              element={
                path === ROUTES_PATH.NOT_FOUND || path === ROUTES_PATH.HOME ? (
                  <Navigate to={ROUTES_PATH.PRODUCTS} replace />
                ) : (
                  <Element additionalStyle={commonPagesStyle.current} />
                )
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default DynamicTemplate;
