import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spiner";
import PropTypes from "prop-types";

const Everything = ({ pageSize, query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const fetchNews = async (pageNumber) => {
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=7723f24c2cc2482ca1c966d11a3015ea&page=${pageNumber}&pageSize=${pageSize}`;
    setLoading(true);
    let promise = await fetch(url);
    let data = await promise.json();
    setArticles(data.articles);
    setTotalArticles(data.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(page);
  }, [query, page, pageSize]);

  const previousClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const nextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div className="container my-3">
          <h1 className="text-center my-4">{query}</h1>
          <div className="row">
            {articles.map((element) => (
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
            ))}
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
              disabled={page >= Math.ceil(totalArticles / pageSize)}
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

Everything.defaultProps = {
  query: "international",
  pageSize: 12,
};

Everything.propTypes = {
  query: PropTypes.string,
  pageSize: PropTypes.number,
};

export default Everything;
