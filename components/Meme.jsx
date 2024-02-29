import memesData from "../src/memesData"
import { useState } from "react"

export default function Meme() {
  // State as object with topText, bottomText and randomImage
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  // Function to get a random meme image from the array
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
    // console.log(memeImage)
  }
  return (
    <main>
      <div className="form">
          <div>
            <label className="form--label">Top text</label>
            <input
              type="text"
              placeholder="Shut up"
              className="form--input"
            />
          </div>
          <div>
            <label className="form--label">Bottom text</label>
            <input
              type="text"
              placeholder="and take my money"
              className="form--input"
            />
          </div>
        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼️
        </button>
        <img src={meme.randomImage} alt="memeImage" className="meme--image"/>
      </div>
    </main>
  )
}
