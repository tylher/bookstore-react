import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const links = [
    {
      id: 1,
      name: 'BOOKS',
      path: '/',
    },
    { id: 2, name: 'CATEGORIES', path: '/Categories' },
  ];
  return (
    <header className="header">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link className="nav-link" to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
