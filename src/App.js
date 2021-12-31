import React, { useState } from "react";

function App(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");

  return (
    <div className="container">
      <div>
        <h1>{props.heading}</h1>

        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handelOnChange}
        ></textarea>
      </div>
      <br />
      <button type="button" class="btn btn-primary" onClick={handelUpClick}>
        Convert to UPPERCASE
      </button>
    </div>
  );
}

export default App;
