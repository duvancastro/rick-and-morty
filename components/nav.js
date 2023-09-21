import React from "react";
import Styles from "../styles/nav.module.css";
import { useRouter } from "next/router";
const Nav = ({ page }) => {
  console.log(typeof page);
  const router = useRouter();
  const cambiar = (nPage) => {
    router.replace(`/pageCharacters?page=${nPage}`);
  };
  return (
    <div className={Styles.nav}>
      <button
        className={Styles.buttonNav}
        onClick={
          () => {page == 1 ? page : cambiar(page - 1)}
        }
      >
        page{page - 1}
      </button>
      <h1 className={Styles.h1}>page {page} </h1>
      <button
        className={Styles.buttonNav}
        onClick={() => {
          page == 42 ? page : cambiar(page + 1);
        }}
      >
        page {page + 1}
      </button>
    </div>
  );
};

export default Nav;
