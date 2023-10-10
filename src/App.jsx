import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./Pages/Home"
import Animations from "./Pages/Animations"
import Designs from "./Pages/Designs"
import Header from "./Conponents/Header"
import Footer from "./Conponents/Footer"
import About from "./Pages/About"
import Aos from "aos"
import 'aos/dist/aos.css'
import './styles.css'

Aos.init();

const App = () => {
  const [headerID, setHeaderID] = useState("")
  const [headerContainer, setHeaderContainer] = useState("")

  const headerChange = () => {
    
      setHeaderID('home-header')
      setHeaderContainer("container-home-header")
    
      
    
  }

  useEffect(()=>{
    headerChange()
  }, [])

  return (
    <>
   <div className ="site-wrapper">
   <Header id={headerID} container={headerContainer}/>
    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/animations" element = {<Animations />} />
        <Route path = "/designs" element = {<Designs />} />
    </Routes>
    <Footer />
   </div>
   </>
   
  )
}

export default App;

