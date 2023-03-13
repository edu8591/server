import React from "react";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Emaily
        </a>
        <ul className="right">
          <li>
            <a>Login with google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
