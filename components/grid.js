import Card from "./card";
import Styles from '../styles/grid.module.css'
import { useContext,useEffect } from "react";
import CharactersContext from "../context/charaters/characterContext";
const Grid = () => {
  const { getCharacters, charaters } = useContext(CharactersContext);

  useEffect(() => {
    getCharacters()
  })
  return (
    <div className={Styles.grid}>
      {charaters.map((character) => {
        return (
          <div key={character.id} className={Styles.grid_children} >
            <Card character={character} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
