import memesData from "../src/memesData"

export default function Meme() {
  let url
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomNumber].url
    console.log(url)
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
      </div>
    </main>
  )
}
