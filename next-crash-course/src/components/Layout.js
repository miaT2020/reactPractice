import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Nav from "./Nav";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="web dev" />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>;
    </>
  );
};

export default Layout;
