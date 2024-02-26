import memesData from "../src/memesData"
import { useState } from "react"

export default function Meme() {
  const [memeImage, setMemeImage] = useState('')
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
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
        <img src={memeImage} alt="memeImage" />
      </div>
    </main>
  )
}
