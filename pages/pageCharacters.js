/* eslint-disable react-hooks/exhaustive-deps */

import Layout from "../components/layout";
import Nav from "../components/nav";
import Grid from "../components/grid";
import { useContext, useEffect, useState } from "react";
import Characterscontext from "../context/charaters/characterContext";

const PageCharacters = () => {
  const [page, setPage] = useState(1);
  const { getCharacters} =useContext(Characterscontext);
  useEffect(() => {
    getCharacters(page);
  }, [page]);
  return (
    <Layout>
      <Nav page={page} setPage={setPage} />
      <Grid />
      <Nav page={page} setPage={setPage} />
    </Layout>
  );
};

export default PageCharacters;
