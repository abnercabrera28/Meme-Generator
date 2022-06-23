import React from "react";

const Meme = () => {
    return (
        <div>
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
                >
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Meme;