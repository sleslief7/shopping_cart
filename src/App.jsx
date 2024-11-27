import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import RootLayout from './layout/RootLayout';
import Products, { categoriesCall } from './components/Products';
import About from './components/About';
import Category, { ProductsLoader } from './components/Category';
import ErrorPage from './components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'products',
          element: <Products />,
          loader: categoriesCall,
          children: [
            {
              path: ':id',
              element: <Category />,
              loader: { ProductsLoader },
            },
          ],
        },
        { path: 'about', element: <About /> },
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
