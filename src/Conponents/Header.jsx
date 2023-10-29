import React, {useState} from "react";
import {Link} from "react-router-dom"

const Header = (props) => {

    const [isNavbarSelected, setIsNavbarSelected] = useState(false)

    const onNavbarClick = () =>{
        if (isNavbarSelected === false){
            setIsNavbarSelected(true)
        } else {
            setIsNavbarSelected(false)
        }
    }

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
                <div className="heading">Austral</div>
                <div className="sub-heading">Multimedia Design</div></Link>
            </div>
            <ul className={isNavbarSelected ? "nav-area.active" : "nav-area"}>
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