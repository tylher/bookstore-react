import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const Category = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
      <h2>{Category}</h2>
    </>
  );
};

export default Categories;
