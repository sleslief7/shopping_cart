import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import RootLayout from './layout/RootLayout';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import { fetchCategories, fetchProducts } from './components/NavBar';

function App() {
  const [cartItems, setCartItems] = [];
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      loader: fetchCategories,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'electronics',
          element: <CategoryProducts />,
          loader: () => fetchProducts('electronics'),
        },
        {
          path: 'jewelery',
          element: <CategoryProducts />,
          loader: () => fetchProducts('jewelery'),
        },
        {
          path: "men's clothing",
          element: <CategoryProducts />,
          loader: () => fetchProducts("men's clothing"),
        },
        {
          path: "women's clothing",
          element: <CategoryProducts />,
          loader: () => fetchProducts("women's clothing"),
        },
        { path: 'cart', element: <Cart /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
