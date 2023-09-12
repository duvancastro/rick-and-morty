import React from "react";
import Image from "next/image";
import Styles from "../styles/card.module.css";
const Card = ({ character }) => {
  return (
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
  );
};

export default Card;
