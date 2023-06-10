import React, { useState } from 'react'


export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("clicked");s
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    // console.log("clicked");s
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    // console.log("clicked");s
    let newText = "";
    setText(newText);
  }

  const handleCopyClick = () => {
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text copied to clipboard","success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  }


  const [text, setText] = useState('');

  return (
    <>
      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>{props.heading}</h3>

        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#001f0e' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="7"></textarea>

      </div>

      <button type="button" className="btn btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
      <button type="button" className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button type="button" className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
      <button type="button" className="btn btn-success mx-2" onClick={handleCopyClick}>Copy Text</button>
      <button type="button" className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Text Information:</h3>
        <p>Number of words: {text.split(" ").length}</p>
        <p>Number of characters: {text.length}</p>
        <p>Time requires to read: {0.008 * text.split(" ").length} minutes</p>
        <h3>Preview:</h3>
        <p>{text.length>0?text:"Preview of your text is here"}</p>
      </div>

    </>
  )
}
