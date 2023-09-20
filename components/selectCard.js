import React, { useState } from 'react';
import Image from 'next/image';
import Style from '../styles/selecCard.module.css';
import { useContext } from "react";
import CharactersContext from  '../context/charaters/characterContext'
const SelectCard = () => {
  const { character,location,episode } = useContext(CharactersContext);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <li className={Style.card__item}>
      <button
        aria-label="Flip card for details"
        className={`${Style.card__button} ${isFlipped ? Style.flipped : ''}`}
        onClick={flipCard}
        type="button"
      >
        <div className={Style.card__front}>
          <Image
            alt={character.name}
            className={Style.card__image}
            height={288}
            loading="lazy"
            src={character.image}
            width={288}
          />
          <h2 className={Style.card__name}>{character.name}</h2>
        </div>
        <div className={Style.card__back}>
          <dl className={Style.card__description}>
            <dt className={Style.card__term}>Name</dt>
            <dd className={Style.card__detail}>{character.name}</dd>
            <dt className={Style.card__term}>Species</dt>
            <dd className={Style.card__detail}>{character.species}</dd>
            <dt className={Style.card__term}>Gender</dt>
            <dd className={Style.card__detail}>{character.gender}</dd>
            <dt className={Style.card__term}>Status</dt>
            <dd className={Style.card__detail}>{character.status}</dd>
            <dt className={Style.card__term}>Location</dt>
            <dd className={Style.card__detail}>{location.name}</dd>
            <dt className={Style.card__term}>Appearances</dt>
            <dd className={Style.card__detail}>{episode.length}</dd>
          </dl>
        </div>
      </button>
    </li>
  );
};

export default SelectCard;
