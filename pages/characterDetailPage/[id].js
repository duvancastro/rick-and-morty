import Link from "next/link"
import Layout from "../../components/layout";
import { useContext } from "react";
import CharactersContext from "../../context/charaters/characterContext";
import SelectCard from "../../components/selectCard";


const CharacterDetailPage = () => {
  const { character } = useContext(CharactersContext);
  const {id , name, image,species}=character
  console.log(id , name, image,species)
 

  return (
    <Layout>
    <Link href="/pageCharacters">pagina</Link>
    <SelectCard character={character}/>
  </Layout>
  
  )
}

export default CharacterDetailPage