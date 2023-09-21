/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import Image from "next/image";
import CharactersContext from  '../context/charaters/characterContext'

const detailCard = () => {
    const { character,location,episode } = useContext(CharactersContext)
  return (
    <div className={Style}>
      <div className={Style}>
        <div className={Style}>
          <Image
            alt={character.name}
            className={Style}
            height={288}
            src={character.image}
            width={288}
          />
            <dl className={Style}>
            <dt className={Style }>Name</dt>
            <dd className={Style }>{character.name}</dd>
            <dt className={Style }>Species</dt>
            <dd className={Style }>{character.species}</dd>
            <dt className={Style }>Gender</dt>
            <dd className={Style }>{character.gender}</dd>
            <dt className={Style }>Status</dt>
            <dd className={Style }>{character.status}</dd>
            <dt className={Style }>Location</dt>
            <dd className={Style }>{location.name}</dd>
            <dt className={Style }>Appearances</dt>
            <dd className={Style }>{episode.length}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default detailCard;
