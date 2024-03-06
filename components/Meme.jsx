// import memesData from "../src/memesData"
import { useState , useEffect} from "react"

export default function Meme() {
  // State as object with topText, bottomText and randomImage
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = useState([])

  useEffect(function() {
    fetch ("https://api.imgflip.com/get_memes")
    .then (response => response.json())
    .then (data => setAllMemes(data.data.memes))
  }, [])

  // Function to get a random meme image from the array
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
    // console.log(memeImage)
  }
  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }
  console.log(meme.topText)
  return (
    <main>
      <div className="form">
        {/* <label className="form--label">Top text</label> */}
        <input
          type="text"
          placeholder="Top Text"
          className="form--input"
          name="topText"
          onChange={handleChange}
          value={Meme.topText}
        />
        {/* <label className="form--label">Bottom text</label> */}
        <input
          type="text"
          placeholder="Bottom Text"
          className="form--input"
          name='bottomText'
          onChange={handleChange}
          value={Meme.bottomText}
        />

        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="memeImage" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

    </main>
  )
}
