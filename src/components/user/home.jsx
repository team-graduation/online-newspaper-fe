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
  }, [currentCategory, allArticles]);

  return (
    <div>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster&effect=shadow-multiple" />
      <Header />
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="post-content-area mb-50">
                <div className="world-catagory-area">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="title">
                      <div class="w3-container w3-lobster">
                        <p class="w3-xlarge font-effect-shadow-multiple">Newspaper</p>
                      </div>
                    </li>
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
                          <div className="col-12 col-md-6 mb-15 card">
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
                                    <a style={{ fontWeight: 'bold' }} className="post-author">
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
          <div className="row world-latest-articles">
            <div className="col-12 col-lg-8">
              <div className="title">
                <h5>Latest News</h5>
              </div>
              {/* Single Blog Post */}
              {latestArticles.map((article) => (
                <div className="card mb-15" key={article.id} onClick={onArticleClickHandler(article)}>
                  <div className="single-blog-post post-style-4 d-flex align-items-center">
                    <div className="post-thumbnail">
                      <img src={article?.thumbnail} alt="" />
                    </div>
                    <div className="post-content">
                      <a href="#" className="headline">
                        <h5>{article?.title}</h5>
                      </a>
                      <p>{article?.summarization}</p>
                      <div className="post-meta">
                        <p>
                          <a href="#" className="post-author">
                            {article?.user?.username}
                          </a>{" "}
                          on{" "}
                          <a href="#" className="post-date">
                            {article?.addedDate}
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
      <Footer />
    </div>
  );
};
export default Home;
