import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home_Navigation = () => {

    const navigate = useNavigate()

    const navigateAbout = () =>{
        navigate("/about")
    }

    const navigateMutiMedia = () =>{
        navigate("/animations")
    }

    const navigateSoftwareDev = () =>{
        navigate("/designs")
    }

  return (
    <>
    <video autoPlay muted loop className="home-page-animation">
        <source src="Videos\Timeline_1.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
    </video>
    <div className='home-wrapper'>
        <div className='main-nav-container'>
            <div className='about-nav'>
                <div onClick={navigateAbout} className='main-nav-item'>
                    <p>ABOUT</p>
                </div>
            </div>
            <div className='main-nav'>
                <div onClick={navigateMutiMedia} className='main-nav-item'>
                    <p>Mutli-Media</p>
                </div>
                <div onClick={navigateSoftwareDev} className='main-nav-item'>
                    <p>Software Development</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home_Navigation