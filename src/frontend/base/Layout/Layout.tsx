import React from "react";
import Head from "next/head";
import { Menu } from "#base/Menu/Menu";
import { AppContextProvider } from "#common/context";

import css from "./Layout.module.css";

export const Layout = ({ children }: { children: any }) => {
  return (
    <AppContextProvider>
      <Head>
        <title>Workout Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className={css.Main} id="main">
        {children}
      </main>
    </AppContextProvider>
  );
};