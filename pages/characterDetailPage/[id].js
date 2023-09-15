import Link from "next/link"
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useContext } from "react";
import CharactersContext from "../../context/charaters/characterContext";


const CharacterDetailPage = () => {
  const { charater } = useContext(CharactersContext);
  const router = useRouter();
  const { id } = router.query;
  console.log(`charater: ${charater}`);

  return (
    <Layout>
    <Link href="/pageCharacters">pagina</Link>
    <h1>{id}</h1>
  </Layout>
  
  )
}

export default CharacterDetailPage