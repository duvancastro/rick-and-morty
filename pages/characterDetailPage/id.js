import Link from "next/link"
import Layout from "../../components/layout";

import SelectCard from "../../components/selectCard";


const CharacterDetailPage = () => {

  return (
    <Layout>
    <Link href="/pageCharacters">pagina</Link>
    <SelectCard />
  </Layout>
  
  )
}

export default CharacterDetailPage