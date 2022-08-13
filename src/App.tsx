import { useMemo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from 'react-router-dom';
import {
  BookIcon,
  CircleIcon,
  HomepageIcon,
  ShoppingCartIcon,
} from './assets/icons';
import { BookCard } from './components/book-card';
import { Sidebar } from './components/sidebar';
import { CategoriesPage } from './pages/categories-page';
import { ProductPage } from './pages/product-page';
import useBooks, { BookProvider } from './provider/book-provider';

const HomePage = () => {
  return <div>Homepage</div>;
};

const SpecificCategoryPage = () => {
  const {
    state: { books },
  } = useBooks();
  const { category: currentCategoryParam } = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => navigate(-1);

  const elements = useMemo(() => {
    const filteredBooks = books.filter(
      (book) => book.discount_set === currentCategoryParam
    );
    return filteredBooks;
  }, [currentCategoryParam, books]);

  return (
    <div style={{ width: '100%' }}>
      <button onClick={handleBackButtonClick}>Go back</button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        }}
      >
        {elements.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

/**
 * TODO: replace hardcoded path strings with ts enum
 * TODO: create sidebar component
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
          />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route
              path='/categories/:category'
              element={<SpecificCategoryPage />}
            />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
