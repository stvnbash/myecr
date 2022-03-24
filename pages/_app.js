import Header from '../components/Header'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <main className="container1 mx-auto container">
        <Component {...pageProps} />
      </main>
    </>
  )
  
}

export default MyApp
