import Card from "./card";
import Stile from '../styles/grid.module.css'
const Grid = ({ characters }) => {
  return (
    <div className={Stile.grid}>
      {characters.map((character) => {
        return (
          <div key={character.id} >
            <Card character={character} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
