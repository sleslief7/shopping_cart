import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import RootLayout from './layout/RootLayout';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import {
  fetchCartItems,
  fetchCategories,
  fetchProducts,
} from './routeLoaders/routeLoaders';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout cartItems={cartItems} />,
      loader: fetchCategories,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home cartItems={cartItems} setCartItems={setCartItems} />,
          loader: fetchProducts,
        },
        {
          path: 'category/:category',
          element: (
            <CategoryProducts
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ),
          loader: fetchProducts,
        },
        {
          path: 'cart',
          element: <Cart cartItems={cartItems} setCartItems={setCartItems} />,

          loader: fetchCartItems,
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
