import React from "react";
import Styles from "../styles/nav.module.css";
const Nav = ({ page, setPage }) => {
  return (
    <div className={Styles.nav}>
      <button className={Styles.buttonNav}
        onClick={() => {
          page == 1 ? page : setPage(page - 1);
        }}
      >
        page{page - 1}
      </button>
      <h1 className={Styles.h1}>page {page} </h1>
      <button className={Styles.buttonNav}
        onClick={() => {
          page == 42 ? page : setPage(page + 1);
        }}
      >
        page {page + 1}
      </button>
    </div>
  );
};

export default Nav;
