import React, { useState } from "react";

function App(props) {

  const handellowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
    
    <div className="container">
      <div className="mt-4">
        <h1>{props.heading}</h1>

        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handelOnChange}
          placeholder="Enter your text here..."
        ></textarea>
      </div>
      <br />
      <div>
      <button type="button" class="btn btn-primary" onClick={handelUpClick}>
        Convert to UPPERCASE
      </button>
      <button type="button" class="btn btn-primary mx-3" onClick={handellowClick}>
        Convert to lowercase
      </button>
    
      </div>
    </div>
    <div className="container">
    <hr />
    </div>
    <div className="container mt-4">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} charecters</p>
      <p>{0.008 * text.split(" ").length} minutes to read.</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}

export default App;
