import React from "react";
import { useGetCurrentUserQuery } from "../store";
import { authApi } from "../store/apis/authApi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log(user);
  const { data, error, isLoading } = useGetCurrentUserQuery();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a href="/auth/google">Login with google</a>
            </li>
            <li>
              <a href="/api/logout" onClick={handleClick}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {error ? error.error : isLoading ? "loading..." : data ? data._id : ""}
    </>
  );
}

export default Header;
