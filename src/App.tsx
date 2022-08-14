import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useBooks, { BookProvider } from './provider/book-provider';
import { BasketPage, CategoriesPage, CategoryPage, ProductPage } from './pages';
import { Sidebar } from './components/sidebar';
import { Button } from './components/button';
import { GITHUB_PROJECT_URL } from './constant';
import {
  ArchiveIcon,
  BookIcon,
  HomepageIcon,
  ShoppingCartIcon,
} from './assets/icons';
import './App.css';
import { ErrorPage } from './pages/error-page';
import { LoadingPage } from './pages/loading-page';
import React, { useRef } from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 style={{ fontSize: '8em', color: 'white' }}>
        Buy your textbooks for the best price
      </h1>
    </div>
  );
};

const Dynamic = () => {
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
    <div style={{ display: 'flex' }}>
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

      <div
        style={{
          backgroundColor: '#1a1110',
          width: '100%',
        }}
      >
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

/**
 * TODO: split components in atoms, molecules, organisms
 * TODO: replace hardcoded path strings with ts enum
 * TODO: add proceed to checkout button + page
 */
function App() {
  return (
    <BookProvider>
      <Router>
        <Dynamic />
      </Router>
    </BookProvider>
  );
}

export default App;
