import React from 'react'
import '../styles.css'

const Software = (props) => {
  return (
    <>
    <div id="devicon">
        <img id='devicon-image' src={props.img}></img>
        <p>{props.text}</p>
    </div>
    </>
  )
}

export default Software