import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AIPHead from '../components/Head'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Make a responsive design
  const router = useRouter()
  console.log(router.pathname)
  
  if (router.pathname === "/") {
    return (
      <div>
        <AIPHead />
        <NavigationBar absolute={ true } currentPage="Home" />
        <Component {...pageProps} />
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <AIPHead />
        <NavigationBar absolute={ false } currentPage="Home" />
        <Component {...pageProps} />
        <Footer />
      </div>
    )
  }
}

export default MyApp
