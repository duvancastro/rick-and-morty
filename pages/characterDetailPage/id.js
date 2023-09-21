/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import Layout from "../../components/layout";
import SelectCard from "../../components/selectCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CharactersContext from "../../context/charaters/characterContext";

const CharacterDetailPage = () => {
  const { selectCharacter } = useContext(CharactersContext);

  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  useEffect(() => {
    selectCharacter(id);
  }, [id]);

  return (
    <Layout>
      <Link href="/pageCharacters">pagina</Link>
      <SelectCard />
    </Layout>
  );
};

export default CharacterDetailPage;
