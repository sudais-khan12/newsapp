import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center my-4">Top Headings</h2>
          <div className="container row">
            <div className="col-md-4">
              <NewsItem
                title="Sample Title"
                desscription="Sample Description"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iQXxIatrVLD9hJfgzO4PHy4wNhvJb3vo3A&s"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="Sample Title"
                desscription="Sample Description"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iQXxIatrVLD9hJfgzO4PHy4wNhvJb3vo3A&s"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="Sample Title"
                desscription="Sample Description"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iQXxIatrVLD9hJfgzO4PHy4wNhvJb3vo3A&s"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
