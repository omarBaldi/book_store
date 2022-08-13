import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './provider/book-provider';
import { BasketPage, CategoriesPage, CategoryPage, ProductPage } from './pages';
import { Sidebar } from './components/sidebar';
import { Button } from './components/button';
import { GITHUB_PROJECT_URL } from './constant';
import {
  BookIcon,
  CircleIcon,
  HomepageIcon,
  ShoppingCartIcon,
} from './assets/icons';
import './App.css';

const HomePage = () => {
  return <div>Homepage</div>;
};

/**
 * TODO: replace hardcoded path strings with ts enum
 * TODO: implement debounce functionality for search
 * TODO: apply style to input box component
 * TODO: split components in atoms, molecules, organisms
 * TODO: remove from map if quantity is 0
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
              <Route path='/basket' element={<BasketPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
