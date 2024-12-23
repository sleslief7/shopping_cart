import { Link, NavLink } from 'react-router-dom';

export default function NavBar({ categories, cartCount }) {
  return (
    <div id="navbar">
      <Link id="logo" to="/">
        Udin Store
      </Link>
      <ul>
        <NavLink to="/">
          <li> Home</li>
        </NavLink>
        {categories.map((category) => {
          return (
            <NavLink to={`/category/${category}`} key={category}>
              <li>{category.charAt(0).toUpperCase() + category.slice(1)}</li>
            </NavLink>
          );
        })}
      </ul>
      <NavLink to="/cart">
        <button>
          <i className="fa-solid fa-cart-shopping"></i> {cartCount}
        </button>
      </NavLink>
    </div>
  );
}
