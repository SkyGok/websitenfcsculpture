import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
