import React from "react";
import { useSelector } from "react-redux";

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
          <a href="/" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">{renderContent()}</ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
