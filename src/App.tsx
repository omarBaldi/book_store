import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CategoriesPage } from './pages/categories-page';
import { ProductPage } from './pages/product-page';
import { BookProvider } from './provider/book-provider';

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
        <div style={{ display: 'flex', overflow: 'hidden' }}>
          <aside
            style={{ minWidth: '20rem', height: '100vh', position: 'relative' }}
          >
            <nav
              style={{
                backgroundColor: 'lightgrey',
                padding: '1rem',
                height: '100%',
                //position: 'fixed',
              }}
            >
              <>
                <div style={{ margin: '0 1rem' }}>
                  <Link to='/'>Home</Link>
                </div>
                <div style={{ margin: '0 1rem' }}>
                  <Link to='/products'>Products</Link>
                </div>
                <div style={{ margin: '0 1rem' }}>
                  <Link to='/categories'>Categories</Link>
                </div>
                <div style={{ margin: '0 1rem' }}>
                  <Link to='/basket'>Basket</Link>
                </div>
              </>
            </nav>
          </aside>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
