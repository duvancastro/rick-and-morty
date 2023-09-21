/* eslint-disable react-hooks/exhaustive-deps */

import Layout from "../components/layout";
import Nav from "../components/nav";
import Grid from "../components/grid";
import { useContext, useEffect } from "react";
import Characterscontext from "../context/charaters/characterContext";
import { useRouter } from "next/router";

const PageCharacters = () => {
  const router = useRouter();
  const { getCharacters } = useContext(Characterscontext);
  const page = parseInt(router.query.page);
  console.log(typeof page);
  useEffect(() => {
    if (page > 0 && page <=42) {
      getCharacters(page);
    } else if(page<=0||page>42) {
      alert(`la pagina ${page} no existe`);
      router.replace("/pageCharacters?page=1");
    }
  }, [page]);
  return (
    <Layout>
      <Nav page={page} />
      <Grid />
      <Nav page={page} />
    </Layout>
  );
};

export default PageCharacters;
