import React from "react"
import{ Link } from "react-router-dom";

function Nav(){
    return(
    <div>
        
        <Link to="/" style={{ textDecoration: 'none', margin: '20px', color: "white"}}>
            Home
        </Link>
        <Link to="about" style={{ textDecoration: 'none', margin: '20px', color: "white" }}>
            About
        </Link>
        <Link to="contact" style={{ textDecoration: 'none', margin: '20px', color: "white" }}>
            Contact
        </Link>

    </div>
    )
}

export default Nav;