import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 12,
    category: "general",
    heading: "General News",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2165a7919334ea7b87ecfdba2eb3b32&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let promise = await fetch(url);
    let data = await promise.json();
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  previousClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  nextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <>
        {this.state.loading && <Spiner />}
        {!this.state.loading && (
          <div className="container my-3">
            <h1 className="text-center my-4">{this.props.heading}</h1>
            <div className=" row">
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
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
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
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalArticles / this.props.pageSize)
                }
                onClick={this.nextClick}
                rel="noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: "#F19C79", border: "none" }}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default News;
