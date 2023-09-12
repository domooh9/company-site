import React, { useState } from "react";
import Nav from "../Nav";
import ThemeContextProvider from "../../contexts/ThemeContext";
import Footer from "../Footer";
import articles from "../blog/article-contents";
import "../blog/article.css"; // Import your CSS file

function Blog() {
  const [expandedArticles, setExpandedArticles] = useState({});

  const toggleExpand = (articleName) => {
    setExpandedArticles((prevState) => ({
      ...prevState,
      [articleName]: !prevState[articleName],
    }));
  };

  return (
    <>
      <ThemeContextProvider>
        <Nav />
        <div className="blog-container">
          <h2>Catch Up with Latest Tech Trends and insights</h2>
          <ul className="article-list">
            {articles.map((article, index) => (
              <li key={index} className="article-item">
                <h3>{article.title}</h3>
                <p className="article-content">
                  {expandedArticles[article.name]
                    ? article.content.join("\n\n")
                    : article.content[0]}
                </p>
                <button
                  className="read-more-button"
                  onClick={() => toggleExpand(article.name)}>
                  {expandedArticles[article.name]
                    ? "Read Less"
                    : "Read More...."}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default Blog;
