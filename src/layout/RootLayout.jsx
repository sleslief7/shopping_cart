import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div id="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
