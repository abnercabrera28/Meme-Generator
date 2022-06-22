import React from "react";
import xzibit from "../images/Xzibit.png"


const Header = () => {
    return (
        <header className="header">
            <img className="x-img" src={xzibit} alt="xzibhit"></img>
            <h2 className="header-title">Meme Generator</h2>
        </header>
    )
}

export default Header;