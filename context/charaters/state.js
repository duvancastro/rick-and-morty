import { GETCHARACTERS,SELECTCHARACTERS } from '../acciones';
import { useReducer } from 'react';
import characterReducer from './charactersReducer';
import axios from 'axios';
import CharactersContext from './characterContext';


const CharactersState = (props) => {
  const initialState = {
    characters: [],
    character:{},
    location:{},
    episode:[],
    actPage:null,

  }
  const [Characters, dispatch] = useReducer(characterReducer, initialState);
  const getCharacters = async (page) => {
    try {

      const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.data

      dispatch({ accion: GETCHARACTERS, data:{characters:data.results ,page:page} });
    } catch (error) {
      console.error(error);
    }

  };
  const selectCharacter=async(idCharacter)=>{
    try {

      const res = await axios.get(`https://rickandmortyapi.com/api/character/${idCharacter}`);
      const data = await res.data

      dispatch({ accion: SELECTCHARACTERS, data: data })
      
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <CharactersContext.Provider
      value={{
        allInfo:Characters,
        characters: Characters.characters,
        character: Characters.character,
        location: Characters.location,
        episode: Characters.episode,
        page: Characters.actPage,
        getCharacters,
        selectCharacter
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
}

export default CharactersState