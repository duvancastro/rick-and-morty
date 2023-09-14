import characterscontext from './characterContext';
import { GETCHARACTERS } from '../acciones';
import { useReducer } from 'react';
import characterReducer from './charactersreducer';
import axios from 'axios';
const CharactersState = (props) => {
  const initialState={
    characters:{},
  }
  const [Characters, dispatch] = useReducer(characterReducer, initialState);
  const getCharacters = async () => {
    try {
      console.log("getCharacters---------------------")
      const res = await axios.get(`https://rickandmortyapi.com/api/character?`);
      console.log(res)
      const data = res.data.results;
      console.log(data)
      dispatch({ accion:GETCHARACTERS, characters: data });
      console.log(`${Characters.characters} estoyyyyyyyyyy`)
    } catch (error) {
      console.error(error);
      console.log(`errrrorrrrrrrrrrrr`)
    }
  };
  return (
    <characterscontext.Provider
      value={{ charaters: Characters.charaters, getCharacters }}
    >
      {props.children}
    </characterscontext.Provider>
  );
}

export default CharactersState