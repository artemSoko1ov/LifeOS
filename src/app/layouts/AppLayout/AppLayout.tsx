import {Outlet} from "react-router-dom";

const AppLayout = () => {

  return (
    <div className="app-layout">
      <h1>APP LAYOUT</h1>
      <Outlet />
    </div>
  );
};

export default AppLayout;