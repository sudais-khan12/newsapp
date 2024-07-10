import React, { Component } from "react";
import "../Main.css";

export class Main extends Component {
  render() {
    return (
      <>
        <div class="scotch-container">
          <nav>
            <a href="#">CONTACT</a>
            <a href="#">ABOUT</a>
            <a
              href="https://www.amazon.com/-/es/Scotch-Cinta-blanco-T-120-est%C3%A1ndar/dp/B008C7Z54Y"
              class="buy"
            >
              BUY NOW
            </a>
          </nav>
          <div class="main-container">
            <div class="text-sphere-container">
              <div class="text-container">
                <h1>Scotch</h1>
                <h2>VIDEOCASSETTE EG</h2>
                <h3>T 120</h3>
                <p>
                  Designed by the inventors of videotape, this Scotch EG
                  Videocasette gives your superior performance
                </p>
                <a
                  href="https://www.amazon.com/-/es/Scotch-Cinta-blanco-T-120-est%C3%A1ndar/dp/B008C7Z54Y"
                  class="buy-cta"
                >
                  Buy Now
                </a>
              </div>
              <a href="https://www.amazon.com/-/es/Scotch-Cinta-blanco-T-120-est%C3%A1ndar/dp/B008C7Z54Y">
                <div class="sphere"></div>
              </a>
            </div>
            <div class="learn-arrow">
              <div class="learn">LEARN MORE</div>
              <div class="arrow">🢓</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;