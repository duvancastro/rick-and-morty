import Layout from "./layout";
import Nav from "./nav";
import Grid from "./grid";
import { useEffect, useState } from "react";

const PageCharacters = () => {
  const [characters, setCharacters] = useState([]);
  let [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchdata();
  }, [page]);

  return (
    <Layout>
        <div className="">

      <Nav page={page} setPage={setPage} />
      <Grid characters={characters} />
        </div>
    </Layout>
  );
};

export default PageCharacters;
