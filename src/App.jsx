import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import RootLayout from './layout/RootLayout';
import CategoryProducts from './components/CategoryProducts';
import Cart, { fetchCartItems } from './components/Cart';
import ErrorPage from './components/ErrorPage';
import { fetchCategories, fetchProducts } from './components/NavBar';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      loader: fetchCategories,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
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
