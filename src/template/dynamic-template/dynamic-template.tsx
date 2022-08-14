import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import useBooks from '../../provider/book-provider';
import {
  HomepageIcon,
  BookIcon,
  ArchiveIcon,
  ShoppingCartIcon,
} from '../../assets/icons';
import { Button } from '../../components/button';
import { Sidebar } from '../../components/sidebar';
import { GITHUB_PROJECT_URL } from '../../constant';
import {
  ProductPage,
  CategoriesPage,
  CategoryPage,
  BasketPage,
  ErrorPage,
  LoadingPage,
} from '../../pages';
import Styles from './dynamic-template.module.scss';

const HomePage = () => {
  return (
    <div>
      <h1 style={{ fontSize: '8em', color: 'white' }}>
        Buy your textbooks for the best price
      </h1>
    </div>
  );
};

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
          { label: 'Home', url: '/', icon: <HomepageIcon /> },
          { label: 'Products', url: '/products', icon: <BookIcon /> },
          {
            label: 'Categories',
            url: '/categories',
            icon: <ArchiveIcon />,
          },
          { label: 'Basket', url: '/basket', icon: <ShoppingCartIcon /> },
        ]}
        additionalContent={
          <Button url={GITHUB_PROJECT_URL}>
            <p>Link to github profile</p>
          </Button>
        }
      />

      <div className={Styles.routesWrapper}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/products'
            element={
              <ProductPage additionalStyle={{ ...commonPagesStyle.current }} />
            }
          />
          <Route
            path='/categories'
            element={
              <CategoriesPage
                additionalStyle={{ ...commonPagesStyle.current }}
              />
            }
          />
          <Route
            path='/categories/:category'
            element={
              <CategoryPage additionalStyle={{ ...commonPagesStyle.current }} />
            }
          />
          <Route
            path='/basket'
            element={
              <BasketPage additionalStyle={{ ...commonPagesStyle.current }} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default DynamicTemplate;
