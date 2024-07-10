import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <>
          <Navbar title="Insight Daily" />
          <News pageSize="12" />
        </>
      </>
    );
  }
}
