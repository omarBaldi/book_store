import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  BookIcon,
  CircleIcon,
  HomepageIcon,
  ShoppingCartIcon,
} from './assets/icons';
import { Sidebar } from './components/sidebar';
import { CategoriesPage } from './pages/categories-page';
import { ProductPage } from './pages/product-page';
import { BookProvider } from './provider/book-provider';
import './App.css';
import { Button } from './components/button';
import { CategoryPage } from './pages/category-page';
import { GITHUB_PROJECT_URL } from './constant';

const HomePage = () => {
  return <div>Homepage</div>;
};

/**
 * TODO: replace hardcoded path strings with ts enum
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
                icon: <CircleIcon />,
              },
              { label: 'Basket', url: '/basket', icon: <ShoppingCartIcon /> },
            ]}
            additionalContent={
              <Button url={GITHUB_PROJECT_URL}>
                <p>Link to github profile</p>
              </Button>
            }
          />

          <div style={{ backgroundColor: '#f2f2f2', width: '100%' }}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<ProductPage />} />
              <Route path='/categories' element={<CategoriesPage />} />
              <Route path='/categories/:category' element={<CategoryPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
