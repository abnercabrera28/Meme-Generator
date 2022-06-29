import React from "react";

const Meme = () => {

    const getImage = () => {
        alert("Clicked!")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }



    return (
        <div className="meme-container">
            <form className="form" onSubmit={handleSubmit}>
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