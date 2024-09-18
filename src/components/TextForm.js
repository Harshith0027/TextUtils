import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text,setText] = useState("")
  /*const [word,setWord] = useState({
    wordValue : text,
    wordLength : text.split(" ").length
  })*/
  const handleUp = () => {
    console.log("Upper case button was clicked");
    setText(text.toUpperCase());
    props.viewAlert("Changed to Upper-Case!", "success");
  }
  const handleLow = () => {
    console.log("Lower case button was clicked");
    setText(text.toLowerCase());
    props.viewAlert("Changed to Lower-Case!", "success");
  }
  const speakOut = () => {
    console.log("System just started to speak out the content");
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleClear = () => {
    console.log("Clear button was clicked");
    setText('');
    props.viewAlert("Content has been Cleared!", "success");
  }
  const handleCopy = () => {
    var text = document.getElementById('my-box');
    text.select()
    navigator.clipboard.writeText(text.value);
    props.viewAlert("Copied to Clip-Board!", "success");
  }
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.viewAlert("Removed extra spaces!", "success");
  }
  const handleOnChange = (event) => {
    console.log("text area changed");
    setText(event.target.value);
  }
  /*const wordMethod = () => {
    if(word.wordValue === " "){
      setWord({
        wordValue : "",
        wordLength : 0
      })
    }
    else if(word.wordLength > 0 && word.wordValue[word.wordLength - 1] === " "){
      setWord({
        wordValue : word.wordValue.slice(0,word.wordLength - 1),
        wordLength : word.wordLength - 1
      })
    }
    else{
      setWord({
        wordValue : text,
        wordLength : text.split(" ").length
      })
    }
  }*/
  return (
    <>
    <div className="container my-3" style={{color: props.modeForm==='light'?'black':'white'}}>
      <div className="mb-3">
          <h1><label className="form-label">{props.label}</label></h1>
          <div>
              <textarea className="form-control" id="my-box" style={{backgroundColor : props.modeForm==='dark'?'#052c65':'white' , color: props.modeForm==='light'?'black':'white'}} value={text} onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={handleUp}>Convert to Upper Case</button>
          <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={handleLow}>Convert to Lower Case</button>
          <button disabled={text.length === 0} type="submit" onClick={speakOut} className="btn btn-primary mx-2 my-2">Speak</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.modeForm==='light'?'black':'white'}}>
      <h3>Content Analysis:</h3>
      <div>
          <p>Your content contains {/*wordMethod.word.wordLength*/ text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters.</p>
          <p>On Average for a human it takes nearly {0.08 * /*wordMethod.word.wordValue*/text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes to read this content.</p>
          <h3>Preview of the Content</h3>
          <p>{text.length === 0 ? "Type in the Text area to preview the content" : text}</p>
      </div>
    </div>
    </>
  )
}

TextForm.propTypes = {
    label : PropTypes.string.isRequired
}

TextForm.defaultProps = {
    label : "Enter the desired Text"
}