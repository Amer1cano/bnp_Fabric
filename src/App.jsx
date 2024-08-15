import { Route, Routes } from "react-router-dom"
import { lazy, useEffect } from "react"
const Home = lazy(()=>import('./pages/home/Home'))
const Collection = lazy(()=>import('./pages/collection/Collection'))
const About = lazy(()=>import('./pages/about/About'))
const Contact = lazy(()=>import('./pages/contact/Contact'))
const WinterDetailPage = lazy(()=>import('./pages/collection/winterCollection/WinterDetailPage'))

import Aos from "aos"
import 'aos/dist/aos.css'


const App = () => {

  useEffect(()=>{
    Aos.init({
    })
  },[])

  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/:id" element={<WinterDetailPage/>} />
      </Routes>
    </div>
  )
}

export default App