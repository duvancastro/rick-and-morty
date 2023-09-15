import { GETCHARACTERS,SELECTCHARACTERS } from '../acciones';
import { useReducer } from 'react';
import characterReducer from './charactersReducer';
import axios from 'axios';
import CharactersContext from './characterContext';


const CharactersState = (props) => {
  const initialState = {
    characters: [],
    character:{},
    page:1,
    prevPage:0,
    nextPage:2,
  }
  const [Characters, dispatch] = useReducer(characterReducer, initialState);
  const getCharacters = async () => {
    try {

      const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${Characters.page}`);
      const data = await res.data

      dispatch({ accion: GETCHARACTERS, data: data.results });
    } catch (error) {
      console.error(error);
    }

  };
  const selectCharacter=async(idCharacter)=>{
  const character=Characters.characters.find(character=>character.id==idCharacter);
  dispatch({ accion: SELECTCHARACTERS, data: character })
    console.log(Characters);

  }
  
  return (
    <CharactersContext.Provider
      value={{
        characters: Characters.characters,
        character: Characters.character,
        getCharacters,
        selectCharacter
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
}

export default CharactersState