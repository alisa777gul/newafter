import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import ukr from "../../assets/ukr.svg";
import log from "../../assets/log.svg";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src={ukr} className={styles.ukr} width={28} height={28} />
          LearnLingo
        </Link>
        <div className={styles.pages}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/teachers" className={styles.link}>
            Teachers
          </Link>
        </div>

        <div className={styles.auth}>
          <Link to="/login" className={styles.login}>
            {" "}
            <img src={log} className={styles.ukr} width={20} height={20} />
            Log In
          </Link>
          <Link to="/register" className={styles.register}>
            Registration
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
