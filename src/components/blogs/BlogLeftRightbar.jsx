import React from "react";
import Sidebar from "./Sidebar";

import { Link } from "react-router-dom";
import { blogArticles6 } from "@/data/blogs";
import Pagination2 from "../common/Pagination2";
export default function BlogLeftRightbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="blog-sidebar-main">
            <div className="list-blog">
              <div className="row">
                {blogArticles6.map((article, index) => (
                  <div key={index} className={article.colClass}>
                    <div className="blog-article-item">
                      <div className="article-thumb">
                        <Link to={`/blog-detail/${article.id}`}>
                          <img
                            className="lazyload"
                            data-src={article.imgSrc}
                            alt={article.imgAlt}
                            src={article.imgSrc}
                            width={1100}
                            height={707}
                          />
                        </Link>
                        <div className="article-label">
                          <Link
                            to={`/blog-detail/${article.id}`}
                            className="tf-btn btn-sm radius-3 btn-fill animate-hover-btn"
                          >
                            {article.label}
                          </Link>
                        </div>
                      </div>
                      <div className="article-content">
                        <div className="article-title">
                          <Link to={`/blog-detail/${article.id}`}>
                            {article.title}
                          </Link>
                        </div>
                        <div className="article-btn">
                          <Link
                            to={`/blog-detail/${article.id}`}
                            className="tf-btn btn-line fw-6"
                          >
                            Read more
                            <i className="icon icon-arrow1-top-left" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="wg-pagination">
                <Pagination2 />
              </ul>
            </div>{" "}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
