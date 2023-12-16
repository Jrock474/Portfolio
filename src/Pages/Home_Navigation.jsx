import React, {useState, useContext} from 'react'
import About from './About'
import Home_Navigation_Boxes from '../Components/Home_Navigation_Boxes'
import { BannerState } from '../App'




const Home_Navigation = () => {

    const [isBannerActive, setIsBannerActive] = useContext(BannerState)

  return (
    <>
    
    {/* Renders the about/landing component is banner is active, otherwise renders home page */}
    {isBannerActive ? <About />  
     : 
    <>  
        <video autoPlay muted loop className="home-page-animation">
            <source src="\Site_Files\Ocean BG.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
        </video>
        <div className='home-wrapper'>
            <div className='main-nav-container'>
                <Home_Navigation_Boxes />
            </div>
        </div>
        </>
        }
    </>
  )
}

export default Home_Navigation