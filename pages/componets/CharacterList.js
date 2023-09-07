import { useEffect, useState } from "react";
import Character from "./Character";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true);
  let [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setloading(false);
      setCharacters(data.results);
    }
    fetchdata();
  }, [page]);
  return (
    <div id="portal" className="main-container">
      <header id="heardNavPage" className="heard-nav-page">
        <h1 id="titelCharacter">RICK AND MORTY</h1>
        <div id="navPage" className="nav-page">
        <button id="backPage" className="button-nav" onClick={() => {page == 1 ? page : setPage(page - 1)}}>
          page{page - 1}</button>
        <p id="namePage" className="name-page-text name-page">page {page} </p>
        <button id="nexPage" className="button-nav" onClick={() => {page == 42 ? page : setPage(page + 1)}}>
          page {page + 1}</button>
        </div>
      </header>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div id="charactersList" className="card-container">
          {characters.map((character) => {
            return (
              <div key={character.id} className="col-md-4">
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
