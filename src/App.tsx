import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductPage } from './pages/product-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/products' element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
