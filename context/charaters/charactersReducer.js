import { GETCHARACTERS } from "../acciones";
const characterReducer = (Characters,dataAccion) => {
  console.log(`llego al redicerrrrr`)
  const { characters, accion } = dataAccion;
  console.log(`${characters} soy charac
  ${accion} soy accic`)
  switch (accion) {
    case GETCHARACTERS:
      console.log(dataAccion)
      console.log('soy characters:')
      console.log(Characters)
      return {
        ...Characters,
        characters: characters,
      };

    default:
      return Characters;
  }
};
export default characterReducer
