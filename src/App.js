import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const {speak} = useSpeechSynthesis();

  const handleOnClick = () => {
    speak({text:text})
  }

  return (
    <div className='container'>
      <h1>Text to speech converter</h1>
      <textarea className="textAreaStyle" onChange={(e) =>{setText(e.target.value)}}></textarea>
      <button className='buttonStyle' onClick={()=>{handleOnClick()}}>
        Dengarkan
      </button>
    </div>
  );
}

export default App;
