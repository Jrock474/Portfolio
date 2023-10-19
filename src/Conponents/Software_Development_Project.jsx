import React from 'react'

const Software_Development_Project = (props) => {
  return (
    <>
    <div className='software-project'>
        <img src={props.projectPicture} />
        <p>{props.projectTitle}</p>
    </div>
    </>
  )
}

export default Software_Development_Project