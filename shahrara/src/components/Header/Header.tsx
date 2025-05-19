import { ReactElement } from "react";

import styles from "./Header.module.css";

import { NavLink } from "react-router";

import clsx from "clsx";

type NavItems = {
  title: string;
  href: string;
};

const navItems: NavItems[] = [
  { title: "خانه", href: "/" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

const Header = (): ReactElement => {
  return (
    <div className={styles.header}>
      <h1 className="logo">شهرآرا</h1>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.href}
                className={({ isActive }) => clsx(isActive && styles.active)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
