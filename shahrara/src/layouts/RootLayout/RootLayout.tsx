import { ReactElement } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Outlet } from "react-router";

import styles from "./RootLayout.module.css"

const RootLayout = (): ReactElement => {
  return (
    <div className={styles["root-layout"]}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
