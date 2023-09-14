import Card from "./card";
import Styles from '../styles/grid.module.css'
import { useContext } from "react";
import Characterscontext from "../context/charaters/characterContext";
const Grid = () => {

  const {characters} = useContext(Characterscontext);
  console.log("---------------------------------------")
  console.log(`${characters} 1 estoy en el grid`)
  return (
    <div className={Styles.grid}>
      {characters.map((character) => {
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
