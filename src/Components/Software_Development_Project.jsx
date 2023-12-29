import React, {useState, useRef, useEffect } from 'react'

const Software_Development_Project = (props) => {

  useEffect (()=>{
    updateStyles(bubbleLoop)
  },[])

  const [isHoverActive, setIsHoverActive] = useState(false)
  const [isLightboxActive, setIsLightBoxActive] = useState(false)

  const divRef = useRef(null);

  const handleHover = () =>{
    if (isHoverActive === false){
      setIsHoverActive(true)
    } 
  }

  const handleHoverExit = () =>{
    if (isHoverActive === true){
      setIsHoverActive(false)
    } 
  }

  const handleClick = () =>{
    if (isLightboxActive === false){
      setIsLightBoxActive(true)
    } else {
      setIsLightBoxActive(false)
    }
  }

  const updateStyles = (callback) => {

    const { speed } = props;
    
    if (!divRef || !divRef.current ) {
      return;
    }
      divRef.current.style.animation = `bubble_intro ${speed}s`;
      // divRef.current.style["animation-iteration-count"] = 'infinite';
      divRef.current.style["animation-timing-function:ease-out"]
      

   callback(); 

  }

  const bubbleLoop = () =>{
    divRef.current.style["animation-timing-function:ease-out"]
    divRef.current.style.animation = `bubble_loop ${5}s`
  }

  return (
    <>
    {isLightboxActive ? 
    <div id="lightbox-container">
    <div id="lightbox">
      <div id="lightbox-image-container" >
        <img src={props.img} />
      </div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <div className='website-buttons'>
        <button><a target="_blank" href={props.website}>Website</a></button>
        <button><a target="_blank" href={props.gitHub}>Github</a></button>
      </div>
      <div className="lightbox-button">
        <button onClick={handleClick}>Collapse</button>
      </div>
    </div>
  </div> : 
    null}

    <div ref={divRef} className="software-project" onMouseEnter={handleHover} onMouseLeave={handleHoverExit} onClick={handleClick}>
    {isHoverActive ? <div id='lightbox-hover'>{props.title}</div> : <img src ={props.img} />}  
    </div>     
    </>
  )
}

export default Software_Development_Project