
import Image from 'next/image'

const Character = ({character}) => {
  return (
    <div id='character' className='card-character'>
    <h3 id='h3Character'>{character.name}</h3>
    <Image src={character.image} alt={character.name} width={100} height={100}  />
  </div>
  )
}

export default Character