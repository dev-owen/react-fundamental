import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>내 상품들</a>
          </li>
          <li>
            <button>로그아웃</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
