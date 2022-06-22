import React from "react";
import xzibit from "../images/Xzibit.png"


const Header = () => {
    return (
        <header className="header">
            <img src={xzibit} alt="xzibhit"></img>
            <h2>Hello</h2>
            <h4>some more</h4>
        </header>
    )
}

export default Header;