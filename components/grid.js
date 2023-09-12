import Card from "./card";
import Styles from '../styles/grid.module.css'
const Grid = ({ characters }) => {
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
