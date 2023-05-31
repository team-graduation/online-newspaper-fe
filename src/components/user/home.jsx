import React, { useContext } from "react";
// import React, { useState, useEffect } from 'react';
import LOGO from "../../img/blog-img/b1.jpg";
import { ArticlesContext } from "../../context/articles.context";
import { UserContext } from "../../context/users.context";
import { categories } from "../../config";
import { useNavigate } from "react-router-dom";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import { Sidebar } from "../common/sidebar";

const Home = () => {

  const navigate = useNavigate();
  const { highlights, latestArticles, mostPopularArticles, setCurrentArticle } =
    useContext(ArticlesContext);
  const { user } = useContext(UserContext);
  console.log(mostPopularArticles);
  const slideItems = [
    {
      id: 1,
      content:
        "Newspaper",
    },
    {
      id: 2,
      content:
        "Newspaper",
    },
    {
      id: 3,
      content:
        "Newspaper",
    },
    {
      id: 4,
      content:
        "Newspaper",
    },
  ];
  const onArticleClickHandler = (article) => (event) => {
    setCurrentArticle(article);
    navigate(`/blog/${article.newsId}`);
  };
  return (
    <div>
      <Header />
      <div className="hero-area">
        <div className="hero-slides owl-carousel">
          {/* Single Slide */}
          <div
            className="single-hero-slide bg-img background-overlay"
            style={{ backgroundImage: "url(/img/blog-img/bg2.jpg)" }}
          />
          {/* Single Slide */}
          <div
            className="single-hero-slide bg-img background-overlay"
            style={{ backgroundImage: "url(/img/blog-img/bg1.jpg)" }}
          />
        </div>
        {/* Hero Post Slide */}
        <div className="hero-post-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-post-slide">
                  {slideItems.map((item) => (
                    <>
                      {/* Single Slide */}
                      <div
                        className="single-slide d-flex align-items-center"
                        onClick={onArticleClickHandler(item)}
                      >
                        <div className="post-number">
                          <p>{item.id}</p>
                        </div>
                        <div className="post-title">{item.content}</div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********** Hero Area End ********** */}
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* ============= Post Content Area Start ============= */}
            <div className="col-12 col-lg-8">
              <div className="post-content-area mb-50">
                {/* Category Area */}
                <div className="world-catagory-area">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="title">Newspaper</li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="tab1"
                        data-toggle="tab"
                        href="#world-tab-1"
                        role="tab"
                        aria-controls="world-tab-1"
                        aria-selected="true"
                      >
                        All
                      </a>
                    </li>
                    {categories.map((category) => (
                      <li className="nav-item">
                        <a
                          className="nav-link capitalize"
                          id="tab2"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="world-tab-2"
                          aria-selected="false"
                          onClick={(e) => navigate(`/category/${category}`)}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="world-tab-1"
                      role="tabpanel"
                      aria-labelledby="tab1"
                    >
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div
                            className="world-catagory-slider owl-carousel wow fadeInUpBig"
                            data-wow-delay="0.1s"
                          >
                            {[0, 1, 2, 3].map(function (post) {
                              return (
                                <div className="single-blog-post">
                                  {/* Post Thumbnail */}
                                  <div className="post-thumbnail">
                                    <img src="/img/blog-img/b1.jpg" alt="" />
                                    {/* Catagory */}
                                    <div className="post-cta">
                                      <a href="#">travel</a>
                                    </div>
                                  </div>
                                  {/* Post Content */}
                                  <div className="post-content">
                                    <a href="#" className="headline">
                                      <h5>
                                        Newspaper
                                      </h5>
                                    </a>
                                    <p>
                                      abc
                                    </p>
                                    {/* Post Meta */}
                                    <div className="post-meta">
                                      <p>
                                        <a href="#" className="post-author">
                                          DiemHoang
                                        </a>{" "}
                                        on{" "}
                                        <a href="#" className="post-date">
                                          May 19, 2023 at 9:48 am
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          {highlights.map(function (post) {
                            return (
                              <div
                                key={post.id}
                                className="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig"
                                data-wow-delay="0.2s"
                                onClick={onArticleClickHandler(post)}
                              >
                                {/* Post Thumbnail */}
                                <div className="post-thumbnail">
                                  <img src={post.backgroundImage} alt="" />
                                </div>
                                {/* Post Content */}
                                <div className="post-content">
                                  <a href="#" className="headline">
                                    <h5>{post.headline}</h5>
                                  </a>
                                  {/* Post Meta */}
                                  <div className="post-meta">
                                    <p>
                                      <a href="#" className="post-author">
                                        {post.author}
                                      </a>{" "}
                                      on{" "}
                                      <a href="#" className="post-date">
                                        {post.publicDate}
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
          <div className="world-latest-articles">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="title">
                  <h5>Latest Articles</h5>
                </div>
                {/* Single Blog Post */}
                {latestArticles.map((article) => (
                  <div
                    key={article.id}
                    className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig"
                    data-wow-delay="0.2s"
                    onClick={onArticleClickHandler(article)}
                  >
                    {/* Post Thumbnail */}
                    <div className="post-thumbnail">
                      <img
                        src={`/img/blog-img/b1${article.id + 7}.jpg`}
                        alt=""
                      />
                    </div>
                    {/* Post Content */}
                    <div className="post-content">
                      <a href="#" className="headline">
                        <h5>{article.headline}</h5>
                      </a>
                      <p>{article.summary}</p>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p>
                          <a href="#" className="post-author">
                            {article.author}
                          </a>{" "}
                          on{" "}
                          <a href="#" className="post-date">
                            {article.publicDate}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-12 col-lg-4">
                <div className="title">
                  <h5>Most Popular Videos</h5>
                </div>
                {mostPopularArticles.map((article) => (
                  <div
                    key={article.newsId}
                    className="single-blog-post wow fadeInUpBig"
                    data-wow-delay="0.2s"
                    onClick={onArticleClickHandler(article)}
                  >
                    {/* Post Thumbnail */}
                    <div className="post-thumbnail">
                      <img src={article.backgroundImage} alt="" />
                      {/* Category */}
                      <div className="post-cta">
                        <a href="#">{article.category?.categoryTitle}</a>
                      </div>
                      {/* Video Button */}
                      {/* <a
                        href="https://www.youtube.com/watch?v=IhnqEwFSJRg"
                        className="video-btn"
                      >
                        <i className="fa fa-play" />
                      </a> */}
                    </div>
                    {/* Post Content */}
                    <div className="post-content">
                      <a href="#" className="headline">
                        <h5>{article.title}</h5>
                      </a>
                      <p>{article.summarization || ''}</p>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p>
                          <a href="#" className="post-author">
                            {article?.user?.username || ''}
                          </a>{" "}
                          on{" "}
                          <a href="#" className="post-date">
                            {(new Date(article.addedDate)).toLocaleString('en-GB', { timeZone: 'UTC' })}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Load More btn */}
          <div className="row">
            <div className="col-12">
              <div className="load-more-btn mt-50 text-center">
                <a href="#" className="btn world-btn">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Footer Area Start ***** */}
      <Footer />
    </div>
  );
};
export default Home;
