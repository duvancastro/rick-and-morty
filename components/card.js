import React from "react";
import Image from "next/image";
import Styles from "../styles/card.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import CharactersContext from "../context/charaters/characterContext";
import Link from "next/link";


const Card = ({ character }) => {
  const router = useRouter();
  const { selectCharacter } = useContext(CharactersContext);
  const handleClick = async () => {
    if (character.id > 0) {
      await selectCharacter(character.id);
    }
  };
  

  return (
    <Link href={`/characterDetailPage/${character.id}`} passHref>
      <div className={Styles.card} onClick={handleClick}>
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
    </Link>
  );
};

export default Card;
