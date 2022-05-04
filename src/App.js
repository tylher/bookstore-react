import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';
import { asyncGetBook } from './redux/configureStore';

const App = () => {
  const dispatch = useDispatch();

  dispatch(asyncGetBook());
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </>
  );
};

export default App;
