import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";

const News = ({ country, pageSize, category, heading }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const fetchNews = async (pageNumber) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7723f24c2cc2482ca1c966d11a3015ea&page=${pageNumber}&pagesize=${pageSize}`;
    setLoading(true); 
    let promise = await fetch(url);
    let data = await promise.json();
    setArticles(data.articles);
    setTotalArticles(data.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(page);
  }, [page, country, category, pageSize]);

  const previousClick = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const nextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {loading && <Spiner />}
      {!loading && (
        <div className="container my-3" style={{ marginTop: "7rem"}}>
          <h1 className="text-center my-4">{heading}</h1>
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 ml-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 60)
                        : "Check for more details"
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
              disabled={page <= 1}
              onClick={previousClick}
              rel="noreferrer"
              className="btn btn-primary"
              style={{ backgroundColor: "#F19C79", border: "none" }}
            >
              &larr; Previous
            </button>
            <button
              disabled={page + 1 > Math.ceil(totalArticles / pageSize)}
              onClick={nextClick}
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
};

News.defaultProps = {
  country: "us",
  pageSize: 12,
  category: "general",
  heading: "General News",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default News;
