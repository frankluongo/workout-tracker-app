import React from "react";
import Link from "next/link";
import { NAVIGATION } from "#common/constants";

import css from "./Menu.module.css";

export const Menu = () => {
  return (
    <header className={css.Header}>
      <nav className={css.Menu}>
        {NAVIGATION.map((el: any) => (
          <Link key={el.to} href={el.to} className={css.MenuLink}>
            {el.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
