import { Route, Routes, useLocation } from "react-router-dom"
import { useState, } from "react"

import Animations from "./Pages/Animations"
import Music from "./Pages/Music"
import Designs from "./Pages/Designs"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./Pages/About"
import React from "react"
import MultiMedia from "./Pages/MultiMedia_Nav"
import Home_Navigation from "./Pages/Home_Navigation"
import Software_Development_Portfolio from "./Pages/Software_Development_Portfolio"
import './styles.css'


const App = () => {
  const location = useLocation()

  const [footerID, setFooterID] = useState("")
  const [sharedFooterClass, setSharedFooterClass] = useState("")
  const [headerID, setHeaderID] = useState("")
  const [sharedHeaderClass, setSharedHeaderClass] = useState("")

  React.useEffect(() => {
    // runs on location, i.e. route, change
    if(location.pathname === "/"){
      setSharedHeaderClass(null)
      setSharedFooterClass(null)
      setHeaderID("home-header")
      setFooterID("home-footer")
    } else {
      setHeaderID(null)
      setFooterID(null)
      setSharedHeaderClass("shared-header")
      setSharedFooterClass("shared-footer")
    }
  }, [location])

  return (
    <>
   <div className ="site-wrapper">
   <Header id={headerID} className={sharedHeaderClass}/>
    <Routes>
        <Route path = "/" element = {<Home_Navigation />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/software-development" element = {<Software_Development_Portfolio />} />
        <Route path = "/multi-media" element = {<MultiMedia />} />
        <Route path = "/designs" element = {<Designs />} />
        <Route path = "/animations" element = {<Animations />} />
        <Route path = "/music" element = {<Music />} />
    </Routes>
    <Footer id={footerID} className={sharedFooterClass} />
   </div>
   </>
  )
}

export default App;

