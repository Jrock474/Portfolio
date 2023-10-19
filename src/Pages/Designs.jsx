import { useState } from "react";

const Designs = () => {

    const [isLightboxActive, setIsLightBoxActive] = useState(false)
    const [lightbox, setLightBox] = useState("") 
    
    const imageClick = (image) =>{
        if (isLightboxActive === false){
            setLightBox(image)
            setIsLightBoxActive(true)
        } 
    }

    const lightboxImageClick = (e) =>{
        if(e != lightbox) {
            setIsLightBoxActive(false)
            setLightBox("")
        }

    }

    return(
        <>
        {isLightboxActive === true ? <div onClick={(e) =>{lightboxImageClick(e.target.src)}} id="lightbox"><img src ={lightbox}></img></div> : null}
        <div className="gallery-section">
            <h1>Designs</h1>
            <div className="gallery-container">
                <div className="gallery-picture">
                    <img onClick={(e) =>{imageClick(e.target.src)}} src="/pictures/Chalks_BBQ_Banner.png"></img>
                    <img onClick={(e) =>{imageClick(e.target.src)}} src="/pictures/Chalks_BBQ.png"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Designs;