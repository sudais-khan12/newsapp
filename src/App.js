import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Home from "./components/Home";
import Everything from "./components/Everything";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
            path="/everything"
            element={
              <div className="container mb-4">
                <Everything pageSize="12" query="international" />
              </div>
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize="12"
                country="us"
                category="sports"
                heading="Sports News"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize="12"
                country="us"
                category="business"
                heading="Business News"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize="12"
                country="us"
                category="entertainment"
                heading="Entertainment News"
              />
            }
          />
          <Route
            exact
            path="/headlines"
            element={
              <News
                key="entertainment"
                pageSize="12"
                country="us"
                category="general"
                heading="Headlines"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize="12"
                country="us"
                category="general"
                heading="General News"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize="12"
                country="us"
                category="health"
                heading="Health News"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize="12"
                country="us"
                category="science"
                heading="Science News"
              />
            }
          />
          <Route
            exact
            path="technology"
            element={
              <News
                key="technology"
                pageSize="12"
                country="us"
                category="technology"
                heading="Technology News"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
