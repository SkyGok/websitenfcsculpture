import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import Comparison from './components/Comparison'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Banner from './components/Banner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <Comparison />
        <Reviews />
        <FAQ />
        <Banner />
      </main>
      <Footer />
    </div>
  )
}
