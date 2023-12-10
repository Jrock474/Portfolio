import { Route, Routes, useLocation } from "react-router-dom"
import { useState, createContext} from "react"

import Animations from "./Pages/Animations"
import Music from "./Pages/Music"
import Designs from "./Pages/Designs"
import Header from "./Conponents/Header"
import Footer from "./Conponents/Footer"
import React from "react"
import MultiMedia from "./Pages/MultiMedia_Nav"
import Home_Navigation from "./Pages/Home_Navigation"
import Software_Development_Portfolio from "./Pages/Software_Development_Portfolio"
import './styles.css'

export const BannerState = createContext()

const App = () => {
  const location = useLocation()

  const [isBannerActive, setIsBannerActive] = useState(true)

  const [footerID, setFooterID] = useState("home-footer")
  const [sharedFooterClass, setSharedFooterClass] = useState("")
  const [headerID, setHeaderID] = useState("home-header")
  const [sharedHeaderClass, setSharedHeaderClass] = useState("")

  React.useEffect(() => {
    // runs on location, i.e. route, change
    if(!location.pathname === "/"){
      if (isBannerActive === true){
        setIsBannerActive(false)
      }
    } 
  }, [location])

  return (
    <>
   <div className ="site-wrapper">
    
     {/* Conditional render that hides the header if the banner is active */}
    {isBannerActive && location.pathname === "/" ?
    null
     : 
    <Header id={headerID} className={sharedHeaderClass}/>}
    <BannerState.Provider value={[isBannerActive, setIsBannerActive]}>
      <Routes>
        <Route path = "/" element = {<Home_Navigation />} />
        <Route path = "/software-development" element = {<Software_Development_Portfolio />} />
        <Route path = "/multi-media" element = {<MultiMedia />} />
        <Route path = "/designs" element = {<Designs />} />
        <Route path = "/animations" element = {<Animations />} />
        <Route path = "/music" element = {<Music />} />
      </Routes>
    </BannerState.Provider>

    {/* Hides Footer if Banner is Active */}
    {isBannerActive && location.pathname === "/"?
    null
     : 
    <Footer id={footerID} className={sharedFooterClass} />}
   </div>
   </>
   
  )
}

export default App;

