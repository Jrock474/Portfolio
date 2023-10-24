import React from 'react'

const Software_Development_Project = (props) => {
  return (
    <>
    <div className="software-project-container">
      <div className="software-project">
        <img src ={props.img} />
        <p className='software-project-name'>{props.title}</p>
        <p className='software-project-description'>{props.description}</p>
        <a target='_blank' href={props.gitHub}>Github</a>
        <a target='_blank' href={props.website}>Website</a>     
      </div>    
    </div>   
    </>
  )
}

export default Software_Development_Project