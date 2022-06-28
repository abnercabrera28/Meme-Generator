import React from "react";

const Meme = () => {

    const getImage = () => {
        alert("Clicked!")
    }



    return (
        <div className="meme-container">
            <form className="form">
                <input 
                    placeholder="Top text" 
                    className="form-input"   
                />
                <input 
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button
                    className="form-button"
                    onClick={getImage}
                >
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Meme;