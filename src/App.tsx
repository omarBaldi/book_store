import { BrowserRouter as Router } from 'react-router-dom';
import { BookProvider } from './provider/book-provider';
import { DynamicTemplate } from './template/dynamic-template';
import './App.css';

/**
 * TODO: replace hardcoded path strings with ts enum
 * TODO: add proceed to checkout button + page
 */
function App() {
  return (
    <BookProvider>
      <Router>
        <DynamicTemplate />
      </Router>
    </BookProvider>
  );
}

export default App;
