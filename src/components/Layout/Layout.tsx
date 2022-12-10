import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Outlet />
    </div>
  );
};

export default Layout;
