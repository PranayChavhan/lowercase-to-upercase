import React, { useState } from "react";
import "./App.css";

function App(props) {
  const [btnText, setBtnText] = useState("Light Mode");

  const [myStyle, setMuStyle] = useState({
    color: "#282c34",
    backgroundColor: "white",
  });

  const toggelStyle = () => {
    if (myStyle.color === "white") {
      setMuStyle({
        color: "#282c34",
        backgroundColor: "white",
      });
      setBtnText("Light Mode");
    } else {
      setMuStyle({
        color: "white",
        backgroundColor: "#282c34",
      });
      setBtnText("Dark Mode");
    }
  };

  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handelCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handellowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

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
      <div className="App" style={myStyle}>
        <div className="container pt-3 mb-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggelStyle}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {btnText}
            </label>
          </div>
        </div>

        <div className="container">
          <div className="mt-4">
            <h1>{props.heading}</h1>

            <textarea
              style={myStyle}
              class="form-control "
              id="exampleFormControlTextarea1"
              rows="10"
              value={text}
              onChange={handelOnChange}
              placeholder="Enter your text here..."
            ></textarea>
          </div>
          <br />
          <div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handelUpClick}
            >
              Convert to UPPERCASE
            </button>
            <button
              type="button"
              class="btn btn-primary mx-3"
              onClick={handellowClick}
            >
              Convert to lowercase
            </button>
            <button
              type="button"
              class="btn btn-primary mx-3"
              onClick={handelCopy}
            >
              Copy
            </button>
            <button
              type="button"
              class="btn btn-primary mx-3"
              onClick={handelExtraSpace}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
        <div className="container">
          <hr />
        </div>
        <div className="container mt-4">
          <h3>Your text summary</h3>
          <p>
            {text.split(" ").length} words and {text.length} charecters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read.</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default App;
