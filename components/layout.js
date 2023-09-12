import Head from "next/head";
import Header from "./header";

import Styles from "../styles/layout.module.css";

const Layout = ({children}) => {
  
  return (
    <div >
      <Head>
        <title>RICK AND MORTY</title>
      </Head>
      <div className={Styles.layout}>
        <Header/>
      {children}
      </div>    

    </div>
  );
};

export default Layout;
