import React, {useState} from 'react'

const Software_Development_Project = (props) => {

  const [isHoverActive, setIsHoverActive] = useState(false)
  const [isLightboxActive, setIsLightBoxActive] = useState(false)

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
      <div className='website_buttons'>
        <button><a target="_blank" href={props.website}>Website</a></button>
        <button><a target="_blank" href={props.gitHub}>Github</a></button>
      </div>
      <div className="lightbox-button">
        <button onClick={handleClick}>Collapse</button>
      </div>
    </div>
  </div> : 
    null}

    <div className="software-project" onMouseEnter={handleHover} onMouseLeave={handleHoverExit} onClick={handleClick}>
    {isHoverActive ? <div id='lightbox-hover'>{props.title}</div> : <img src ={props.img} />}  
    </div>     
    </>
  )
}

export default Software_Development_Project