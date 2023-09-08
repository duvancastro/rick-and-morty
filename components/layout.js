import Head from "next/head";
import Header from "./header";

import Stiles from "../styles/layout.module.css";

const Layout = ({children}) => {
  
  return (
    <div className={Stiles.layout}>
      <Head>
        <title>RICK AND MORTY</title>
      </Head>
      <div>
        <Header  />
      {children}
      </div>    

    </div>
  );
};

export default Layout;
