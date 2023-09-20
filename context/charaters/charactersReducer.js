import { GETCHARACTERS,SELECTCHARACTERS} from "../acciones";
const characterReducer = (Characters, dataAccion) => {
  const { data, accion } = dataAccion;
  
  switch (accion) {
    case GETCHARACTERS:
      return {
        ...Characters,
        characters: data,
      };
    case SELECTCHARACTERS:
      console.log('entro sales')
      return {
        ...Characters,
        character: data,
        location: data.location,
        episode: data.episode,
      }

    default:
      return Characters
      break
  }
};
export default characterReducer