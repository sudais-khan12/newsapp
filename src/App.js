import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import News from "./components/News";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <>
        <>
          <Navbar title="Insight Daily" />
          {/* <News pageSize="12" /> */}
          <div className="container">
            <Home />
          </div>
        </>
      </>
    );
  }
}
