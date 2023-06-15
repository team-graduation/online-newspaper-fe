import React, { useContext, useEffect } from "react";
import { ArticlesContext } from "../../../context/articles.context";
import { useNavigate } from "react-router-dom";
import { Header } from "../../common/header";
import { Footer } from "../../common/footer";
import "../../user/card.css"


const ListNewsOfUser = () => {

  const navigate = useNavigate();
  const { setCurrentArticle, articlesOfUser = [], getNewsByUser } = useContext(ArticlesContext);
  useEffect(() => {
    getNewsByUser();
  }, []);
  return (
    <div>
      <Header />
      <div
        className="hero-area height-400 bg-img background-overlay"
        style={{ backgroundImage: "url(img/blog-img/bg3.jpg)" }}
      />

      <div className="container">
        <div className="row justify-content-center">
          {/* Test */}
          {/* 
          {articlesOfUser.map((article) => (
            <div className="col-12 col-md-4 ">
              <div class="myCard">
                <div class="innerCard">
                  <div class="frontSide" style={{ backgroundImage: `url(${article?.thumbnail})` }}>
                  </div>
                  <div class="backSide">
                    <p class="title">BACK SIDE</p>
                    <p>Leave Me</p>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          {articlesOfUser.map((article) => (
            <div className="col-12 col-md-6 ">
              <div className="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig"
                              data-wow-delay="0.2s">
                <div className="post-thumbnail">
                <img width={90} height={90} src={article.thumbnail} alt="" />
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
                        {new Date(article.addedDate).toLocaleDateString()}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}


          {/* End test */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ListNewsOfUser;
