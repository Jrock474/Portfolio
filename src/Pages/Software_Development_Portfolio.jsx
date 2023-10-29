import React from 'react'
import Software_Development_Project from '../Conponents/Software_Development_Project'

const Software_Development_Portfolio = () => {
  return (
    <>
    <h1>Software Development Projects</h1>
    <div className='software-development-container'>
      <Software_Development_Project 
        img="https://raw.githubusercontent.com/Jrock474/Movie_Search/main/src/assets/Movie_Search_Preview.png"
        title = "Movie Search"
        gitHub = "https://github.com/Jrock474/Movie_Search"
        website = "https://movie-search-jrock474.vercel.app/"
        description = "A mobile responsive app that searches movies from an IMBD API based off of provided query"
      />
      <Software_Development_Project 
        img="https://raw.githubusercontent.com/Jrock474/React_Project/main/src/assets/Screen%20Shot%202023-10-24%20at%209.12.05%20AM.png"
        title = "Country Search"
        gitHub = "https://github.com/Jrock474/React_Project"
        website = "https://react-project-jrock474.vercel.app/"
        description = "My first React Project that searches and displays all Countries from an API while also displaying specific information on the selected country such as it's continent, timezone, ect."
      />
    </div>
    </>
  )
}

export default Software_Development_Portfolio