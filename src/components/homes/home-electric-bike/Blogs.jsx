import { articles8 } from "@/data/blogs";

import { Link } from "react-router-dom";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blogs() {
  return (
    <section className="flat-spacing-14 line">
      <div className="container">
        <div
          className="flat-title align-items-start px-0 wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title fw-6">
            Guides for everything <br />
            you need
          </span>
        </div>
        <div className="hover-sw-nav hover-sw-4 view-default">
          <Swiper
            dir="ltr"
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              568: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true, el: ".spd336" }}
            navigation={{
              prevEl: ".snbp336",
              nextEl: ".snbn336",
            }}
          >
            {articles8.map((article) => (
              <SwiperSlide key={article.id}>
                <div
                  className="blog-article-item wow fadeInUp"
                  data-wow-delay={article.wowDelay}
                >
                  <div className="article-thumb">
                    <Link to={`/blog-detail/${article.id}`}>
                      <img
                        className="lazyload"
                        data-src={article.imgSrc}
                        alt={article.alt}
                        src={article.imgSrc}
                        width={550}
                        height={550}
                      />
                    </Link>
                    <div className="article-label">
                      <Link
                        to={`/blog-detail/${article.id}`}
                        className="animate-hover-btn btn-icon btn-sm radius-3 tf-btn text-capitalize"
                      >
                        {article.label}
                      </Link>
                    </div>
                  </div>
                  <div className="article-content">
                    <div className="article-title font-sora">
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round snbp336">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round snbn336">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-recent justify-content-center spd336" />
        </div>
      </div>
    </section>
  );
}
