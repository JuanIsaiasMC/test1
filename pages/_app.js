import { Provider } from 'react-redux'
import { store } from '../store/store'
import '../styles/globals.css'
// envuelve toda la aplicacion, si ponemos algo en el return se vera reflejado en todas las paginas
// permite importar stylis globales
// es un componente

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
