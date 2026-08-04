import React, { Component } from "react";
import Main from "./Components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import BackendWakeNotice from "./Components/BackendWakeNotice/BackendWakeNotice";
import "./apiStatus";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <BackendWakeNotice />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
