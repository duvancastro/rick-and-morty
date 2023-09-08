import React from "react";

const Nav = ({ page, setPage }) => {
  return (
    <div>
      <div className="nav-page">
        <button
          className="button-nav"
          onClick={() => {
            page == 1 ? page : setPage(page - 1);
          }}
        >
          page{page - 1}
        </button>
        <p className="name-page-text name-page">page {page} </p>
        <button
          className="button-nav"
          onClick={() => {
            page == 42 ? page : setPage(page + 1);
          }}
        >
          page {page+1}
        </button>
      </div>
    </div>
  );
};

export default Nav;
