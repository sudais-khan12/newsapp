import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/headlines">
            <figure className="grid-item" data-caffeinated="false">
              <img
                src="https://images.unsplash.com/photo-1597212720428-ec423c8612ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="a cup of hot cocoa with marshmallows on top. "
                title="Photo by Elena Leya for Unsplash. "
              />
              <figcaption>Headlines</figcaption>
            </figure>
          </Link>
          <Link to="/everything">
            <figure className="grid-item" data-caffeinated="false">
              <img
                src="https://images.unsplash.com/photo-1498644035638-2c3357894b10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ld3NwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="a cup of hot cocoa with marshmallows on top. "
                title="Photo by Elena Leya for Unsplash. "
              />
              <figcaption>Everything</figcaption>
            </figure>
          </Link>
          <Link to="/business">
            <figure className="grid-item" data-caffeinated="true">
              <img
                src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
                alt="Overhead view of a cup of coffee. "
                title="Photo by Jack Carter for Unsplash. "
              />
              <figcaption>Business</figcaption>
            </figure>
          </Link>
          <Link to="/entertainment">
            <figure className="grid-item" data-caffeinated="false">
              <img
                src="https://images.unsplash.com/photo-1717295248494-937c3a5655b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVudGVydGFpbm1lbnR8ZW58MHx8MHx8fDA%3D"
                alt="A cup of coffee in dramatic lighting. "
                title="Photo by Jocelyn Morales for Unsplash. "
              />
              <figcaption>Entertainment</figcaption>
            </figure>
          </Link>
          <Link to="/general">
            <figure className="grid-item" data-caffeinated="true">
              <img
                src="https://plus.unsplash.com/premium_photo-1691223714882-57a432c4edaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VuZXJhbCUyMG5ld3N8ZW58MHx8MHx8fDA%3D"
                alt="An overhead view of a cup of espresso. "
                title="Photo by Marc Babin for Unsplash"
              />
              <figcaption>General</figcaption>
            </figure>
          </Link>
          <Link to="/health">
            <figure className="grid-item" data-caffeinated="false">
              <img
                src="https://plus.unsplash.com/premium_photo-1668487826666-baa00865bc13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmVzfGVufDB8fDB8fHww"
                alt="Herbal tea in a clear teacup."
                title="Photo by engin akyurt for Unsplash"
              />
              <figcaption>Health</figcaption>
            </figure>
          </Link>
          <Link to="/science">
            <figure className="grid-item" data-caffeinated="true">
              <img
                src="https://images.unsplash.com/photo-1526930382372-67bf22c0fce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVuY2V8ZW58MHx8MHx8fDA%3D"
                alt="A latte in a white cup with a flourish of foam on top. "
                title="Photo by tabitha turner for Unsplash"
              />
              <figcaption>Science</figcaption>
            </figure>
          </Link>
          <Link to="/sports">
            <figure className="grid-item" data-caffeinated="false">
              <img
                src="https://media.istockphoto.com/id/1293105095/photo/soccer-field-with-illumination-green-grass-and-cloudy-sky-background-for-design-or-advertising.webp?b=1&s=170667a&w=0&k=20&c=utGs9gBO8yyq7huMRHL-ko6OADXdfYdi_suBoh1pNWU="
                alt="a cup of hot cocoa with marshmallows on top. "
                title="Photo by Elena Leya for Unsplash. "
              />
              <figcaption>Sports</figcaption>
            </figure>
          </Link>
          <Link to="/technology">
            <figure className="grid-item" data-caffeinated="true">
              <img
                src="https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                alt="Top view of a cappuccino served in a white cup. "
                title="Photo by Bryan Burgos for Unsplash"
              />
              <figcaption>Technology</figcaption>
            </figure>
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
