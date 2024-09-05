import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import Hightlights from './components/Hightlights'
import Model from './components/models/Model'
import Features from './components/Features'
function App() {

  return (
    <div className='bg-black'>
      <Header />
      <Hero />
      <Hightlights />
      <Model />
      <Features />
    </div>
  )
}

export default App
