import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="Categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
