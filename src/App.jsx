import { useState } from 'react'
import './App.css'

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me!",
  "I'm gonna cry",
  "You're breaking my heart T_T",
  ""
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img alt='bears kissing' src='https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.com' />
          <h1 className='text'>Yayyyy!!!</h1>
        </>
      ): (
        <>
          <img alt='bear with hearts' src='https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.com'/>
          <h1>Will you be my valentine?</h1>
          <div>
            <button className='yesButton' style={{fontSize: yesButtonSize}} onClick={()=> setYesPressed(true)}>Yes</button>
            <button onClick={handleNoClick} className='noButton'>{getNoButtonText()}</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
