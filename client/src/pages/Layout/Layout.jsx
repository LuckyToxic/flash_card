import { Outlet } from "react-router";
import Nav from "../Nav/Nav";
import styles from "../Layout/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.footerPlaceholder}>
        © 2025 ни один бобробуйвол не пострадал
      </div>
    </div>
  );
}
