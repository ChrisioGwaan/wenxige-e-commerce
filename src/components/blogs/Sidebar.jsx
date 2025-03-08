import React from "react";

import { Link } from "react-router-dom";
import { blogArticles8, categories, imageList } from "@/data/blogs";
export default function Sidebar() {
  return (
    <div className="tf-section-sidebar wrap-sidebar-mobile">
      <div className="sidebar-item sidebar-categories">
        <div className="sidebar-title">Blog categories</div>
        <div className="sidebar-content">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <a href="#">
                  {category.name}
                  <span>({category.count})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar-item sidebar-post">
        <div className="sidebar-title">Recent Post</div>
        <div className="sidebar-content">
          <ul>
            {blogArticles8.map((article, index) => (
              <li key={index}>
                <div className="blog-article-item style-sidebar">
                  <div className="article-thumb">
                    <Link to={`/blog-detail/${article.id}`}>
                      <img
                        alt="image"
                        src={article.imgSrc}
                        width={1100}
                        height={707}
                      />
                    </Link>
                  </div>
                  <div className="article-content">
                    <div className="article-label">
                      <Link
                        to={`/blog-detail/${article.id}`}
                        className="tf-btn btn-sm radius-3 btn-fill animate-hover-btn"
                      >
                        {article.label}
                      </Link>
                    </div>
                    <div className="article-title">
                      <Link to={`/blog-detail/${article.id}`} className="">
                        {article.title}
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar-item sidebar-tags">
        <div className="sidebar-title">Blog tags</div>
        <div className="sidebar-content">
          <ul className="tags-lists">
            <li>
              <a href="#" className="tags-item">
                Bags
              </a>
            </li>
            <li>
              <a href="#" className="tags-item">
                Fashion
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-item sidebar-instagram">
        <div className="sidebar-title">Instagram</div>
        <div className="sidebar-content">
          <ul>
            {imageList.map((image, index) => (
              <li key={index}>
                <img
                  alt="image"
                  src={image.src}
                  width={image.width}
                  height={image.height}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
