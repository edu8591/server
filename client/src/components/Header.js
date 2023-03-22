import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const user = useSelector(({ auth }) => auth.user);
  const renderContent = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          {/* <a href={user ? "/surveys" : "/"} className="left brand-logo">
            Emaily
          </a> */}
          <Link to={user ? "/surveys" : "/"} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">{renderContent()}</ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
