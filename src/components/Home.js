import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <>
        <div className="filter-buttons">
          <h1 className="text-center my-4">Catogaries </h1>
          <hr />
        </div>

        <div className="grid-container" id="drinks-grid">
          <figure className="grid-item" data-caffeinated="true">
            <img
              src="https://images.unsplash.com/flagged/photo-1552938207-64eb8d53d8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYxNjkxMTJ8&ixlib=rb-4.0.3&q=80&w=400"
              alt="Overhead view of a cup of coffee. "
              title="Photo by Jack Carter for Unsplash. "
            />
            <figcaption>Business</figcaption>
          </figure>

          <figure className="grid-item" data-caffeinated="false">
            <img
              src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYxNjkxNzR8&ixlib=rb-4.0.3&q=80&w=400"
              alt="A cup of coffee in dramatic lighting. "
              title="Photo by Jocelyn Morales for Unsplash. "
            />
            <figcaption>Entertainment</figcaption>
          </figure>

          <figure className="grid-item" data-caffeinated="true">
            <img
              src="https://images.unsplash.com/photo-1542128423-054d636febca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYxNjgyMTl8&ixlib=rb-4.0.3&q=80&w=400"
              alt="An overhead view of a cup of espresso. "
              title="Photo by Marc Babin for Unsplash"
            />
            <figcaption>General</figcaption>
          </figure>

          <figure className="grid-item" data-caffeinated="false">
            <img
              src="https://images.unsplash.com/photo-1602223876962-6b2b349dc239?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYxNjg1MzJ8&ixlib=rb-4.0.3&q=85"
              alt="Herbal tea in a clear teacup."
              title="Photo by engin akyurt for Unsplash"
            />
            <figcaption>Health</figcaption>
          </figure>
          <figure className="grid-item" data-caffeinated="true">
            <img
              src="https://images.unsplash.com/photo-1593443320739-77f74939d0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYxNjg3NDh8&ixlib=rb-4.0.3&q=80&w=400"
              alt="A latte in a white cup with a flourish of foam on top. "
              title="Photo by tabitha turner for Unsplash"
            />
            <figcaption>Science</figcaption>
          </figure>

          <figure className="grid-item" data-caffeinated="false">
            <img
              src="https://images.unsplash.com/photo-1637572815755-c4b80092dce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYxNjkyNjB8&ixlib=rb-4.0.3&q=80&w=400"
              alt="a cup of hot cocoa with marshmallows on top. "
              title="Photo by Elena Leya for Unsplash. "
            />
            <figcaption>Sports</figcaption>
          </figure>

          <figure className="grid-item" data-caffeinated="true">
            <img
              src="https://images.unsplash.com/photo-1474255710329-379550af928d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTYxNjg5MzF8&ixlib=rb-4.0.3&q=80&w=400"
              alt="Top view of a cappuccino served in a white cup. "
              title="Photo by Bryan Burgos for Unsplash"
            />
            <figcaption>Technology</figcaption>
          </figure>
        </div>
      </>
    );
  }
}

export default Home;
