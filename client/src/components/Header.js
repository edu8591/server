import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.auth);
  console.log("user: ", user);
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a href="/auth/google">Login with google</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
