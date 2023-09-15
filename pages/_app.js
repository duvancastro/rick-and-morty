import CharactersState from '../context/charaters/state'
import '../styles/globals.css'
import '../styles/Home.module.css'
function MyApp({ Component, pageProps }) {
  return (
  <CharactersState>
    <Component {...pageProps} />
  </CharactersState>
  )
}

export default MyApp
