import React from "react";
import Image from "next/image";
import Styles from "../styles/card.module.css";
import Link from "next/link";
const Card = ({ character }) => {
  return (
    <Link href={`/characterDetailPage/id?id=${character.id}`} passHref>
      <div className={Styles.card}>
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
