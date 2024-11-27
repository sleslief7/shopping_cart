import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div id="navbar">
      <Link id="logo">Udin Store</Link>
      <ul>
        <NavLink to="/">
          <li> Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate('/cart')}>cart</button>
    </div>
  );
}
