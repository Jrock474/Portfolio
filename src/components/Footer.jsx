const Footer = (props) => {
    return (
        <footer id={props.id} className={props.className}>
      <p>
          <a href="mailto:jordanw0412@gmail.com">Contact</a>
      </p>    
      <p>
          <img src="./Site_Files/copyright_symbol_3.png"></img>
          All Rights Reserved
      </p>    
    </footer>
    )
}

export default Footer;