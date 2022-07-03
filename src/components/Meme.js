import React, { useEffect, useState } from "react";

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-top-text"></h2>
                <h2 className="meme-bottom-text"></h2>
            </div>
        </div>
    )
}

export default Meme;