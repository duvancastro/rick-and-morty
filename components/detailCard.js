/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import Image from "next/image";
import CharactersContext from "../context/charaters/characterContext";
import Style from "../styles/detailCrad.module.css";

const detailCard = () => {
  const { character, location, episode } = useContext(CharactersContext);
  return (
    <div className={Style.card_ext}>
      <div className={Style.card_center}>
        <div className={Style.card_internal}>
          <Image
            alt={character.name}
            className={Style}
            height={200}
            src={character.image}
            width={200}
          />
          <div className={Style.formulario}>
            <div className={Style.texto}><h2>Name: {character.name}</h2></div>
            <div className={Style.texto}><h2>Species: {character.species}</h2></div>
            <div className={Style.texto}><h2>Gender: {character.gender}</h2></div>
            <div className={Style.texto}><h2>Status: {character.status}</h2></div>
            <div className={Style.texto}><h2>Location: {location.name}</h2></div>
            <div className={Style.texto}><h2>Appearances: {episode.length}</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailCard;
