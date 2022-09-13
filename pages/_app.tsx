import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AIPHead from '../components/Head'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Make a responsive design
  return <div>
    <AIPHead />
    <NavigationBar currentPage="Home" />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
