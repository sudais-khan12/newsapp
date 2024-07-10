import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2165a7919334ea7b87ecfdba2eb3b32&page=1&pagesize=12";
    let promise = await fetch(url);
    let data = await promise.json();
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
    });
  }

  previousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2165a7919334ea7b87ecfdba2eb3b32&page=${
      this.state.page - 1
    }&pagesize=12`;
    let promise = await fetch(url);
    let data = await promise.json();
    this.setState({ articles: data.articles, page: this.state.page - 1 });
  };

  nextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 12)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2165a7919334ea7b87ecfdba2eb3b32&page=${
        this.state.page + 1
      }&pagesize=12`;
      let promise = await fetch(url);
      let data = await promise.json();
      this.setState({ articles: data.articles, page: this.state.page + 1 });
    }
  };

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
          <div className="container d-flex justify-content-between my-4 w-25">
            <button
              disabled={this.state.page <= 1}
              onClick={this.previousClick}
              rel="noreferrer"
              className="btn btn-primary"
              style={{ backgroundColor: "#F19C79", border: "none" }}
            >
              &larr; Previous
            </button>
            <button
              onClick={this.nextClick}
              rel="noreferrer"
              className="btn btn-primary"
              style={{ backgroundColor: "#F19C79", border: "none" }}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
