import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar title="Insight Daily" />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="container mb-4">
                  <Home />
                </div>
              }
            />
            <Route
              exact
              path="/sports"
              element={<News pageSize="12" country="us" category="sports" heading = "Sports News" />}
            />
            <Route
              exact
              path="/business"
              element={<News pageSize="12" country="us" category="business" heading = "Business News" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News pageSize="12" country="us" category="entertainment" heading = "Entertainment News" />
              }
            />
            <Route
              exact
              path="/general"
              element={<News pageSize="12" country="us" category="general" heading = "General News" />}
            />
            <Route
              exact
              path="/health"
              element={<News pageSize="12" country="us" category="health" heading = "Health News" />}
            />
            <Route
              exact
              path="/science"
              element={<News pageSize="12" country="us" category="science" heading = "Science News" />}
            />
            <Route
              exact
              path="technology"
              element={
                <News pageSize="12" country="us" category="technology" heading = "Technology News" />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
