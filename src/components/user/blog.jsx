import React, { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../../context/articles.context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BackgroundImage from "../../assets/img/blog-img/bg2.jpg";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import { Sidebar } from "../common/sidebar";
import { CommentContext } from "context/comment.context";
import axios from "axios";
const COMMENT_API_BASE_URL = "http://localhost:8080/api/auth";

const Blog = () => {
  const params = useParams();
  const { currentArticle = {}, getNewsById, setCurrentArticle } = useContext(ArticlesContext);
  const { comments = [], getCommentByNews, setComments, createComment } = useContext(CommentContext);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id: articleId } = params;

  useEffect(() => {
    const { id: articleId } = params;
    const response = getNewsById(articleId);
    setCurrentArticle(response.data);
    getCommentByNews(articleId);
  }, []);

  const onSubmitCommentHandler = async (articleId) => {
    
  }

  const onCategoryClickHandler = (categoryId) => (event) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div>
      <Header />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <div
        className="hero-area height-600 bg-img"
        style={{
          backgroundImage: `url(${currentArticle?.thumbnail || BackgroundImage
            })`,
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="single-blog-title text-center" style={{ background: '#fff', borderRadius: '10px' }}>
                {/* Catagory */}
                <div className="w3-container">
                  <span className="w3-tag w3-spin w3-round-xxlarge w3-red">
                    <a style={{ fontWeight: 'bold', fontSize: '20px' }} onClick={onCategoryClickHandler(currentArticle?.category?.categoryId)}>{currentArticle?.category?.categoryTitle}</a>
                  </span>
                </div>
                <h3>
                  {currentArticle?.title ||
                    "Newspaper Headline"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********** Hero Area End ********** */}
      <div className="main-content-wrapper section-padding-50">
        <div className="container">
          <div className="row justify-content-center">
            {/* ============= Post Content Area ============= */}
            <div className="col-12 col-lg-8">
              <div className="single-blog-content mb-100">
                {/* Post Meta */}
                <div className="post-meta">
                  <p>
                    <span>Created by</span>&nbsp;
                    <span style={{ fontWeight: "bold", color: 'black' }}>
                      {currentArticle?.user?.username || "Unknown"}
                    </span>{" "}
                    on{" "}
                    <a className="post-date">
                      {currentArticle?.addedDate || "Unknown"}
                    </a>
                  </p>
                </div>
                {/* Post Content */}
                <div class="w3-container">
                  <div class="w3-tag w3-round w3-amber" style={{ transform: 'rotate(-10deg)', padding: '3px' }}>
                    <div class="w3-tag w3-round w3-amber w3-border w3-border-white">
                      {currentArticle?.sentiment}
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    <p className="w3-opacity" style={{ textAlign: 'center' }}><i>{currentArticle?.summarization}</i></p>
                    <hr></hr>
                  </div>
                  {currentArticle?.content ? <fragment dangerouslySetInnerHTML={{ __html: currentArticle?.content }}></fragment> : (
                    <>
                      <h6>Content null</h6>
                      <div >
                        <p>
                          <h1>Created by</h1>
                          <a href="#">
                            {currentArticle?.user?.username}
                          </a>{" "}
                          on{" "}
                          <h3>
                            {currentArticle?.addedDate}
                          </h3>
                        </p>
                      </div>
                    </>
                  )}

                  <div className="post-meta">
                    <p>
                      <a href="#" className="post-author">
                        {currentArticle?.user?.username || "Unknown"}
                      </a>{" "}
                      on{" "}
                      <a href="#" className="post-date">
                        {currentArticle?.addedDate || "Unknown"}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
          <div className="row">
            {/* Start Comment */}
            <div class="d-flex flex-column col-md-8">
              <div class="coment-bottom bg-white p-2 px-4">
                {comments.map((comment) => (
                  <div
                    class="commented-section mt-2">
                    <div class="d-flex flex-row align-items-center commented-user">
                      <h4 style={{ fontWeight: "bold" }}>{comment.user.username}</h4></div>
                    <div><span>{comment.content}</span></div>
                  </div>
                ))}
                <div class="d-flex flex-row add-comment-section mt-4 mb-4">
                  <input type="text" className="form-control mr-3" style={{ width: '960px' }} placeholder="Add comment" content={content} />
                  <button class="btn btn-primary" onClick={() => onSubmitCommentHandler()}>Comment</button></div>
              </div>
            </div>
            {/* End Comment */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
