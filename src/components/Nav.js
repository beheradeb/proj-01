import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="navigation">
        <span className="sp1"></span>
        <span className="sp2"></span>
        <span className="sp3"></span>
        <span className="sp4"></span>
        <span className="sp5"></span>
        <span className="sp6"></span>
        <span className="sp7"></span>
        <span className="sp8"></span>
        <span className="sp9"></span>
      </div>
      <ul>
        <li>
          <Link to="/" style={{ marginLeft: "10px" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/leads">Leads</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/assets">Assets</Link>
        </li>
        <li>
          <Link to="/dev">Dev Area</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
