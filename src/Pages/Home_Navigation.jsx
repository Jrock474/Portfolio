import React, {useState, createContext, use} from 'react'
import About from './About'
import Home_Navigation_Boxes from '../Conponents/Home_Navigation_Boxes'

export const AboutState = createContext()


const Home_Navigation = () => {

    const [isAboutActive, setIsAboutActive] = useState(true)

  return (
    <>
    {isAboutActive ? <AboutState.Provider value={[isAboutActive, setIsAboutActive]}> <About />  </AboutState.Provider>
     : 
    <>  
        <video autoPlay muted loop className="home-page-animation">
            <source src="Videos\Timeline_1.mp4" type="video/mp4" />
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