import Link from "next/link"
import { useContext, useEffect } from "react"
import CharactersContext from "../context/charaters/characterContext"

const Home = () => {
  return (
    <>
      <Link href="/pageCharacters">pagina</Link>
      <Link href="/characterDetailPage/1">pagina2</Link>
    </>
  )
}

export default Home
