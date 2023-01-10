import React from "react";
import Link from "next/link";
import { NAVIGATION } from "#common/constants";

export const Menu = () => {
  return (
    <header className="header">
      <nav className="menu">
        {NAVIGATION.map((el: any) => (
          <Link key={el.to} href={el.to} className="menu-link">
            {el.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
