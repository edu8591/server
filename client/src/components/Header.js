import React from "react";
import { useGetCurrentUserQuery } from "../store";

function Header() {
  const { data, error, isLoading } = useGetCurrentUserQuery();
  if (error) {
    console.log(error.error);
  }
  if (isLoading) {
    console.log("is loading");
  }
  if (data) {
    console.log(data);
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">Emaily</a>
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
