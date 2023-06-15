import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">사용자</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">어드민</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>로그아웃</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
