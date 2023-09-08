import React from 'react'
import Image from 'next/image'
import Stiles from '../styles/card.module.css'
const Card = ({character}) => {
  return (
    <div className={Stiles.card} >
    <h2 >{character.name}</h2>
    <Image src={character.image} alt={character.name} width={100} height={100}  />
    <h3>{character.species}</h3>

  </div>
  )
}

export default Card