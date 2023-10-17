import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import BackGround from "../image/lightning_blue_background.png";

const Layout = () => {
  return (
    <div
      className="Layout"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: `cover`,
      }}
    >
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
