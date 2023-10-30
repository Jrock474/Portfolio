import React from 'react'
import { useNavigate } from 'react-router-dom'

const MultiMedia = () => {

  const navigate = useNavigate()

    const navigateAnimations = () =>{
        navigate("/animations")
    }

    const navigateDesigns = () =>{
        navigate("/multi-meida/designs")
    }

    const navigateMusic = () =>{
        navigate("/multi-media/music")
    }

  return (
    <>
    <h1>MultiMedia</h1>
    <div className='gallery-section'>
    <div className='main-nav-container'>
            <div className='about-nav'>
                <div onClick={navigateAnimations} className='main-nav-item'>
                    <p>Animations</p>
                </div>
            </div>
            <div className='main-nav'>
                <div onClick={navigateDesigns} className='main-nav-item'>
                    <p>Designs</p>
                </div>
                <div onClick={navigateMusic} className='main-nav-item'>
                    <p>Music</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MultiMedia