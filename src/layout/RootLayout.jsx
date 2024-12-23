import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootLayout = ({ cartItems }) => {
  const categories = useLoaderData();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div>
      <NavBar categories={categories} cartCount={cartCount} />
      <div id="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
