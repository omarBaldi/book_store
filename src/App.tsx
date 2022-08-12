import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/product-page';
import { BookProvider } from './provider/book-provider';

function App() {
  return (
    <Router>
      <BookProvider>
        <Routes>
          <Route path='/products' element={<ProductPage />} />
        </Routes>
      </BookProvider>
    </Router>
  );
}

export default App;
