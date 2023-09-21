import { GETCHARACTERS,SELECTCHARACTERS,NEXTPAGE,PREVPAGE} from "../acciones";
const characterReducer = (Characters, dataAccion) => {
  const { data, accion } = dataAccion;
  
  switch (accion) {
    case GETCHARACTERS:
      return {
        ...Characters,
        characters: data,
      };
    case SELECTCHARACTERS:
     
      return {
        ...Characters,
        character: data,
        location: data.location,
        episode: data.episode,
      }
    case NEXTPAGE:
      
      return {
        ...Characters,
        character: data,
        location: data.location,
        episode: data.episode,
      }
    case PREVPAGE:
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