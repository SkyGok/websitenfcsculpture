import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise">
      <Navbar />
      <main>
        <Hero />

        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
