import React from "react";
import ReactDOM from "react-dom";

import BackdropFilter from "../src/BackdropFilter";

import "./styles.css";

import drwho from "./drwho.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BackdropFilter
          className="bluredForm"
          filter={"blur(10px) sepia(20%)"}
          html2canvasOpts={{
            allowTaint: true
          }}
          onDraw={() => {
            console.log("Rendered !");
          }}
        >
          <form>
            <div className="profilePic">
              <img src={drwho} alt="me" />
            </div>
            <h4>@tnargib</h4>
            <p>Login</p>
            <hr />
            <p>Password</p>
            <hr />
            <div className="button">Sign in</div>
            <small>Forgot password ?</small>
          </form>
        </BackdropFilter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
