
import Layout from "../components/layout";
import Nav from "../components/nav";
import Grid from "../components/grid";
import { useContext, useEffect, useState } from "react";
import Characterscontext from "../context/charaters/characterContext";

const PageCharacters = () => {
  console.log('estoy en PageCharacters')
  let [page, setPage] = useState(1);
  return (
    <Layout>
      <Nav page={page} setPage={setPage} />
      <Grid />
    </Layout>
  );
};

export default PageCharacters;
