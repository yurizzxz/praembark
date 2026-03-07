import { Header } from '@/components/common/header'
import { Hero, About, Services, Benefits, Contact, Footer } from '@/sections'

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
