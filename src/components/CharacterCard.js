

export default function CharacterCard() {

  return (
    <div className="CharacterCard">
      <h3>name</h3>
      <img src='#' alt='character'/>
      <button>{true ? "I'm good 😇" : "I'm bad 😈"}</button>
        <button className="remove-btn">REMOVE</button>
    </div>
  )
}
