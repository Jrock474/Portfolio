import { Route, Routes, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Animations from "./Pages/Animations"
import Designs from "./Pages/Designs"
import Header from "./Conponents/Header"
import Footer from "./Conponents/Footer"
import React from "react"
import './styles.css'
import Home_Navigation from "./Pages/Home_Navigation"

const App = () => {
  const location = useLocation()

  const [headerID, setHeaderID] = useState("")
  const [sharedHeaderClass, setSharedHeaderClass] = useState("")

  React.useEffect(() => {
    // runs on location, i.e. route, change
    if(location.pathname === "/"){
      setSharedHeaderClass(null)
      setHeaderID("home-header")
    } else {
      setHeaderID(null)
      setSharedHeaderClass("shared-header")
    }
  }, [location])

  return (
    <>
   <div className ="site-wrapper">
   <Header id={headerID} className={sharedHeaderClass}/>
    <Routes>
        <Route path = "/" element = {<Home_Navigation />} />
        <Route path = "/animations" element = {<Animations />} />
        <Route path = "/designs" element = {<Designs />} />
    </Routes>
    <Footer />
   </div>
   </>
   
  )
}

export default App;

