import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('');
  const handleOnChange = (event) => {
    console.log("text change");
    setText(event.target.value);
  }
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text was converted to uppercase","primary");
  }
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text was converted to lowercase","warning");
  }
  const trim = () => {
    // let newText = text.trim();
    // setText(newText);
    let prevChar = " ";
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      let curChar = text[i];
      if (!(prevChar === " " && curChar === " ")) {
        newText += curChar;
      }
      prevChar = curChar;
    }
    setText(newText);
    props.showAlert("Extra space removed","warning");
  }
  const copy = () => {
    navigator.clipboard.writeText(text);
    
    props.showAlert("Text was copied","success");
  }
  const clear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text was cleared","danger");
  }
  return (
    <>
      <div className={`container bg-${props.mode === 'dark' ? 'gray' : 'white'}`}>
        <h2>{props.label}</h2>
        <div className="mb-3">
          <label htmlFor="text" className="form-label"></label>
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder='Enter your Text' value={text} onChange={handleOnChange} id="text" rows="7"></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={upperCase}>UpperCase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={lowerCase}>LowerCase</button>
        <button className='btn btn-success mx-2 my-2' onClick={copy}>Copy</button>
        <button className='btn btn-warning mx-2 my-2' onClick={trim}>Trim</button>
        <button className='btn btn-danger mx-2 my-2' onClick={clear}>Clear</button>
      </div>
      <div className="container my-3">
        <h1>Text Summury</h1>
        {/* regular expression /\s+/ */}
        <p className='para-1'>{text.split(/\s+/).filter((e)=>{return e.length !== 0}).length} Words and {text.length} Characters</p>
        <p className='para-2'>{0.008 * text.split(/\s+/).filter((e)=>{return e.length !== 0}).length} Minutes to Read</p>

      </div>
      <div className="container">
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}

