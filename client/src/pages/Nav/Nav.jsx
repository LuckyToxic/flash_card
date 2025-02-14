import styles from "./Nav.module.css";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

export default function Nav() {
  let navigate = useNavigate();

  return (
    <nav className={styles.container}>
      <NavLink
        to="/registration"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Страничка регистрации
      </NavLink>

      <NavLink
        to="/themes"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Темы
      </NavLink>

      <NavLink
        to="/input"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Выйти
      </NavLink>
      {/* <button type='button' onClick={() => navigate('/test')}>
        результат
      </button> */}
    </nav>
  );
}
