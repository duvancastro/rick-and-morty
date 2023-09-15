import React from "react";
import Image from "next/image";
import Styles from "../styles/card.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import CharactersContext from "../context/charaters/characterContext";

const Card = ({ character }) => {
  const router =useRouter()
  const { selectCharacter } = useContext(CharactersContext);
  const characterdata=async()=>{
    selectCharacter(character.id)
    router.push(`/characterDetailPage/ID=${character.id}`)
  }

  return (
    <div className={Styles.card} onClick={characterdata} >
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        className={Styles.Image}
      />
      <div className={Styles.card__footer}>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </div>
    </div>
  );
};

export default Card;
