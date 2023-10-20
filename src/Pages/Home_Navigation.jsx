import React from 'react'
import About from '../Conponents/About'

const Home_Navigation = () => {
  return (
    <>
     <About />
    <div className='main-nav-container'>
        <div className='multi-media'>
            <p>Mutli-Media</p>
        </div>
        <div className='software-development'>
            <p>Software Development</p>
        </div>
    </div>
    </>
  )
}

export default Home_Navigation