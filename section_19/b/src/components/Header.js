import classes from "./Header.module.css";
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const dispatchEvent = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatchEvent(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && 
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </> }
          <li>
            {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
            {!isAuthenticated && <button>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
