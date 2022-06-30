import React, { useEffect, useState } from "react";

const Meme = () => {

    const [memeImage, setMemeImage] = useState("")

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => console.log(data.data.memes))
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()

        // const memesArray = 
        // const randomNumber = Math.floor(Math.random() * memes.length)
        // setMemeImage(memes[randomNumber].url)
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
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
            <img src={memeImage} className="meme-image" />
        </div>
    )
}

export default Meme;