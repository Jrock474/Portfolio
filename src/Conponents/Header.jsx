import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

const Header = (props) => {

    const [isNavbarSelected, setIsNavbarSelected] = useState(false)
    const [initialRender, setInitialRender] = useState(false)
    let screenWidth = screen.width

    const onNavbarClick = () =>{
        if (isNavbarSelected === false){
            setIsNavbarSelected(true)
        } else {
            setIsNavbarSelected(false)
        }
    }

    useEffect(()=>{
        if(initialRender === false){
            setInitialRender(true)
        } else {
            if(screen.width > 1000){
                setIsNavbarSelected(false)
            }
        }
    },[screenWidth])

    return(
        <>
        <header id={props.id} className={props.className}>
        <section className="container-shared-header">
            <div onClick={onNavbarClick} className = "toggle-button">
                <span className ="bar"></span>
                <span className ="bar"></span>
                <span className ="bar"></span>
            </div>
            <div className="welcome-text"><Link to="/">
                <div className="heading">Jordan</div>
                <div className="sub-heading">Multimedia & Software Development</div></Link>
            </div>
            <ul className={isNavbarSelected && screen.width <= 1000 ? "nav-area-active" : "nav-area"}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/software-development">Software-Development</Link></li>
                <li><Link to="/multi-media">Multi-Media</Link></li>
            </ul>
        </section>
        </header> 
        </>
    )
}

export default Header;