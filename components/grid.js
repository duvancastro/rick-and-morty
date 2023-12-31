import Card from "./card";
import Styles from "../styles/grid.module.css";
import { useContext, useEffect } from "react";
import CharactersContext from "../context/charaters/characterContext";
const Grid = () => {
  const { characters,page } = useContext(CharactersContext);
  console.log(page)

  return (
    <div className={Styles.grid}>
      {characters.map((character) => {
        return (
          <div key={character.id} className={Styles.grid_children}>
            <Card character={character} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
