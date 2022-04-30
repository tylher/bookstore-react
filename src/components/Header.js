import { Link } from "react-router-dom";
const Header = () => {
  const links = [
    {
      id: 1,
      name: "Books",
      path: "/",
    },
    { id: 2, name: "Categories", path: "/Categories" },
  ];
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li>
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header