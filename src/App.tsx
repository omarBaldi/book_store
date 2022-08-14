import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './provider/book-provider';
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

const HomePage = () => {
  return <div></div>;
};

/**
 * TODO: replace hardcoded path strings with ts enum
 * TODO: split components in atoms, molecules, organisms
 */
function App() {
  return (
    <BookProvider>
      <Router>
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
              /* backgroundColor: '#f2f2f2', */ backgroundColor: '#1a1110',
              width: '100%',
            }}
          >
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<ProductPage />} />
              <Route path='/categories' element={<CategoriesPage />} />
              <Route path='/categories/:category' element={<CategoryPage />} />
              <Route path='/basket' element={<BasketPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
