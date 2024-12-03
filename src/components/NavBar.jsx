import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function NavBar({ categories, cartCount }) {
  const navigate = useNavigate();
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

export async function fetchCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return await res.json();
}

export async function fetchProducts({ params }) {
  const { category } = params;
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${category}'s products`);
  }

  return await res.json();
}
