import { GETCHARACTERS } from '../acciones';
import { useReducer } from 'react';
import characterReducer from './charactersReducer';
import axios from 'axios';
import CharactersContext from './characterContext';


const CharactersState = (props) => {
  const initialState = {
    characters: [],
    page:1,
    prevPage:0,
    nextPage:2,
  }
  const [Characters, dispatch] = useReducer(characterReducer, initialState);
  const getCharacters = async () => {
    try {

      const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${Characters.page}`);
      const data = await res.data

      dispatch({ accion: GETCHARACTERS, characters: data.results });
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <CharactersContext.Provider
      value={{
        charaters: Characters.characters,
        getCharacters
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
}

export default CharactersState