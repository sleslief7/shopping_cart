import { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootLayout = () => {
  const categories = useLoaderData();
  const [cartCount, setCartCount] = useState(0);
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
