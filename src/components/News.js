import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2165a7919334ea7b87ecfdba2eb3b32";
    let promise = await fetch(url);
    let data = await promise.json();
    this.setState({ articles: data.articles });
  }

  render() {
    return (
      <>
        <div className="container my-3" style={{ color: "#F19C79" }}>
          <h1 className="text-center my-4">Top Headings</h1>
          <div className="container row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 ml-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 60)
                        : "Check for more detils"
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
