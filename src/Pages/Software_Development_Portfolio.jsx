import React from 'react'
import Software_Development_Project from '../Components/Software_Development_Project'

const Software_Development_Portfolio = () => {
  return (
    <>
    <video autoPlay muted loop className="home-page-animation">
      <source src="\Videos\World_is_Yours_10_Seconds.mp4" type="video/mp4" />
      Sorry, your browser doesn't support videos.
        </video>
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
      <Software_Development_Project 
        img="https://raw.githubusercontent.com/Jrock474/Austral.github.io/main/Site_Files/Screen%20Shot%202023-10-29%20at%207.19.55%20PM.png"
        title = "Portfolio (Version 1)"
        gitHub = "https://github.com/Jrock474/Austral.github.io"
        website = "https://jrock474.github.io/Austral.github.io/index.html"
        description = "This was my initial portfolio that was developed without a framework while I was still learning how to code. Its purpose was to showcase my prevoius creative works"
      />
      <Software_Development_Project 
        img= "https://user-images.githubusercontent.com/38538883/281213796-b499276b-fcb3-4f24-8a62-e867a5085af2.png"
        title = "Kanri-Mono"
        gitHub = "https://github.com/Jrock474/Capstone_Project"
        website = "https://capstone-project-psi-bay.vercel.app/"
        description = "I served as the Project Manager and my responsibillities were: Deployment, Database & Database Migrations, Game Logic, server-side Login & Registration logic, and server-side Save Data logic"
      />
    </div>
    </>
  )
}

export default Software_Development_Portfolio