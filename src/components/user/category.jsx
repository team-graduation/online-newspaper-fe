import React, { useContext, useEffect } from "react";
import { ArticlesContext } from "../../context/articles.context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import { Sidebar } from "../common/sidebar";
import "./card.css"

const Category = () => {
  const { filteredArticles = [], getNewsByCategory, setFilteredArticles } = useContext(ArticlesContext);
  const params = useParams();
  const navigate = useNavigate();

  const onArticleClickHandler = (article) => (event) => {
    navigate(`/news/${article.newsId}`);
  };
  const { id: categoryId } = params;

  useEffect(() => {
    const { id: categoryId } = params;

    const response = getNewsByCategory(categoryId);
    setFilteredArticles(response.data);
    console.log(categoryId);
  }, []);

  return (
    <div>
      <Header />
      <div
        className="hero-area height-500"
        style={{ backgroundImage: "url(https://st.depositphotos.com/1000128/2002/i/450/depositphotos_20021363-stock-photo-electronic-and-paper-media-concept.jpg)" }}  
      />
      <div className="main-content-wrapper section-padding-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="title capitalize">{filteredArticles?.title}</li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {filteredArticles.map((article) => (
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
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Category;
