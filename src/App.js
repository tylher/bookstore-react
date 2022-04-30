import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";

const App = () => {
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
