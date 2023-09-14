import { GETCHARACTERS } from "../acciones";
const characterReducer = (Characters, dataAccion) => {
  const { characters, accion } = dataAccion;
  switch (accion) {
    case GETCHARACTERS:
      return {
        ...Characters,
        characters: characters,
      };

    default:
      return Characters
      break
  }
};
export default characterReducer