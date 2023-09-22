/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import Layout from "../../components/layout";
import BuscarPorId from "../../components/buscarPorId";
import Details from "../../components/detailCard";
import { useRouter} from "next/router";
import{useEffect,useState,useContext} from "react"
import CharactersContext from "../../context/charaters/characterContext";
import Style from "../../styles/id.module.css";
const CharacterDetailPage = () => {
  const { selectCharacter, page } = useContext(CharactersContext);
  const [url, seturl] = useState(`/pageCharacters?page=${page}`);

  const router = useRouter();
  const id = parseInt(router.query.id);
  console.log(url);

  useEffect(() => {
    if (id > 0 && id <= 826) {
      selectCharacter(id);
      if (page == null) {
        console.log("entro");
        seturl(`/pageCharacters?page=1`);
      }
    } else if (id < 0 || id > 826) {
      alert(`el personaje ${id} no existe`);
      router.replace("/characterDetailPage/id?id=1");
    }
  }, [id]);
  console.log(url);

  return (
    <Layout>
      <Link href={url}>VOLVER</Link>
      <div className={Style.contect}>
        <BuscarPorId />
        <Details />
      </div>
    </Layout>
  );
};

export default CharacterDetailPage;
