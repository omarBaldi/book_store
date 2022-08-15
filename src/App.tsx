import { BrowserRouter as Router } from 'react-router-dom';
import { BookProvider } from './provider/book-provider';
import { DynamicTemplate } from './template/dynamic-template';
import './App.css';

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
