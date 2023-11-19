import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import About from './About'


const Home_Navigation = () => {

    const [isAboutActive, setIsAboutActive] = useState(true)

  return (
    <>
    {isAboutActive ? <About />
     : 
    <>  
        <video autoPlay muted loop className="home-page-animation">
            <source src="Videos\Timeline_1.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
        </video>
        <div className='home-wrapper'>
            <div className='main-nav-container'>
                <div className='about-nav'>
                    <Link to="/about">
                        <div className='main-nav-item'>
                            <p>ABOUT</p>
                        </div>
                    </Link>
                </div>
                <div className='main-nav'>
                    <Link to="/multi-media">
                        <div className='main-nav-item'>
                            <p>Mutli-Media</p>
                        </div>
                    </Link>
                    <Link to="/software-development">
                        <div className='main-nav-item'>
                            <p>Software Development</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
        }
    </>
  )
}

export default Home_Navigation