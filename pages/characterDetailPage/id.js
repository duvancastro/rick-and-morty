/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import Layout from "../../components/layout";
import SelectCard from "../../components/selectCard";
import Details from "../../components/detailCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CharactersContext from "../../context/charaters/characterContext";

const CharacterDetailPage = () => {
  const { selectCharacter,page } = useContext(CharactersContext);
  let url=`/pageCharacters?page=${page}`
  const router = useRouter();
  const id = parseInt(router.query.id)
  console.log(typeof id);
  useEffect(() => {
    if (id > 0 && id <=826) {
    selectCharacter(id);
    if(page==null){
      url=`/pageCharacters?page=1`
    }
   
    } else if(id<0||id>826) {
      alert(`el personaje ${id} no existe`);
      router.replace("/characterDetailPage/id?id=1");
    }
  }, [id]);

  return (
    <Layout>
      <Link href={url}>pagina</Link>
      <div >
      {/* <SelectCard /> */}
      <Details/>
      </div>
    </Layout>
  );
};

export default CharacterDetailPage;
