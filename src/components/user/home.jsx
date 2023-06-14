import React, { useContext, useMemo, useState } from "react";
import { ArticlesContext } from "../../context/articles.context";
import { UserContext } from "../../context/users.context";
import { categories } from "../../config";
import { useNavigate } from "react-router-dom";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import { Sidebar } from "../common/sidebar";
import { CategoryContext } from "../../context/categories.context";

const Home = () => {

  const navigate = useNavigate();
  const { latestArticles, allArticles } = useContext(ArticlesContext);
  const { allCategories = [] } = useContext(CategoryContext);
  const { user } = useContext(UserContext);
  const [currentCategory, setCurrentCategory] = useState('');

  const onArticleClickHandler = (article) => (event) => {
    navigate(`/news/${article.newsId}`);
  };

  const onCategoryClickHandler = (category) => (event) => {
    setCurrentCategory(category.categoryId);
  };

  const articlesByCategory = useMemo(() => {
    return !currentCategory ? allArticles : allArticles.filter(article => article.category?.categoryId === currentCategory)
  },[currentCategory,allArticles]);

  return (
    <div>
      <Header />
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
                        onClick={() => setCurrentCategory('')}
                      >
                        ALL
                      </a>
                    </li>
                    {/* {categories.map((category) => ( */}
                    {allCategories.map((category) => (
                      <li className="nav-item">
                        <a
                          className="nav-link capitalize"
                          id="tab2"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="world-tab-2"
                          aria-selected="false"
                          onClick={onCategoryClickHandler(category)}
                          // onClick={(e) => navigate(`/category/${category.categoryId}`)}
                        >
                          {category.categoryTitle}
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
                          {articlesByCategory.map((article) => (
                            <div className="col-12 col-md-6 mb-30">
                            <div
                              key={article.id}
                              className="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig"
                              data-wow-delay="0.2s"
                              onClick={onArticleClickHandler(article)}
                            >
                              <div className="post-thumbnail">
                                <img width={90} height={90} src={article.thumbnail} alt="" />
                              </div>

                              <div className="post-content">
                                <a href="#" className="headline">
                                  <h5>{article.title}</h5>
                                </a>

                                <div className="post-meta">
                                  <p>
                                    <a href="#" className="post-author">
                                      {article?.user?.username}
                                    </a>{" "}
                                    on{" "}
                                    <a href="#" className="post-date">
                                      {new Date(article.addedDate).toLocaleDateString()}
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            </div>
                          ))}
                        
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
                  <h5>Latest News</h5>
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
                        src={article.thumbnail}
                        alt=""
                      />
                    </div>
                    {/* Post Content */}
                    <div className="post-content">
                      <a href="#" className="headline">
                        <h5>{article.title}</h5>
                      </a>
                      <p>{article.summarization}</p>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p>
                          <a href="#" className="post-author">
                            {/* {article.user.username} */}
                          </a>{" "}
                          on{" "}
                          <a href="#" className="post-date">
                            {article.addedDate}
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
                {allArticles.map((article) => (
                  <div
                    key={article.newsId}
                    className="single-blog-post wow fadeInUpBig"
                    data-wow-delay="0.2s"
                    onClick={onArticleClickHandler(article)}
                  >
                    {/* Post Thumbnail */}
                    <div className="post-thumbnail">
                      <img src={article.thumbnail} alt="" />
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
