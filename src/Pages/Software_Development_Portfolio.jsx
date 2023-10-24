import React from 'react'
import Software_Development_Project from '../Conponents/Software_Development_Project'

const Software_Development_Portfolio = () => {
  return (
    <>
    <h1 className=''>Software Development Projects</h1>
    <div className='software-development-container'>
      <Software_Development_Project 
        img="https://raw.githubusercontent.com/Jrock474/Movie_Search/main/src/assets/Movie_Search_Preview.png"
        title = "Movie Search"
        gitHub = "https://github.com/Jrock474/Movie_Search"
        website = "https://movie-search-jrock474.vercel.app/"
        description = "An app that searches movies in an IMBD API based off of provided query"
      />
    </div>
    </>
  )
}

export default Software_Development_Portfolio