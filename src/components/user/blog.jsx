import React, { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../../context/articles.context";
import { useParams } from "react-router-dom";
import BackgroundImage from "../../assets/img/blog-img/bg2.jpg";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import { Sidebar } from "../common/sidebar";
import { CommentContext } from "context/comment.context";

const Blog = () => {
  const params = useParams();
  const { currentArticle = {}, getNewsById, setCurrentArticle } = useContext(ArticlesContext);
  const { comments = [], getCommentByNews, setComments, createComment } = useContext(CommentContext);
  const [content, setContent] = useState("");

  useEffect(() => {
    const { id: articleId } = params;
    const response = getNewsById(articleId);
    setCurrentArticle(response.data);

    getCommentByNews(articleId);
  }, []);

  const onSubmitCommentHandler = () => {
    let newComment = new FormData();
    newComment.append('content', content);

    createComment(newComment);
  }

  // const navigate = useNavigate();
  // const { articles , setCurrentArticle } = useContext(ArticlesContext);

  return (
    <div>
      <Header />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <div
        className="hero-area height-600 bg-img background-overlay"
        style={{
          backgroundImage: `url(${currentArticle?.thumbnail || BackgroundImage
            })`,
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="single-blog-title text-center">
                {/* Catagory */}
                <div className="post-cta">
                  <a href="#">{currentArticle?.category?.categoryTitle}</a>
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
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* ============= Post Content Area ============= */}
            <div className="col-12 col-lg-8">
              <div className="single-blog-content mb-100">
                {/* Post Meta */}
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
                {/* Post Content */}

                <div className="post-content">
                  <div><button class="w3-button w3-round-xlarge w3-yellow w3-ripple">{currentArticle?.sentiment}</button></div>
                  <br></br>
                  <div>
                    <p style={{ textAlign: 'center' }}><i>{currentArticle?.summarization}</i></p>
                    <hr></hr>
                  </div>



                  {currentArticle?.content ? <fragment dangerouslySetInnerHTML={{ __html: currentArticle?.content }}></fragment> : (
                    <>
                      <h6>Content null</h6>
                      {/* Post Tags */}
                      <ul className="post-tags">
                        <li>
                          <a href="#">Manual</a>
                        </li>
                        <li>
                          <a href="#">Liberty</a>
                        </li>
                        <li>
                          <a href="#">Recommendations</a>
                        </li>
                        <li>
                          <a href="#">Interpritation</a>
                        </li>
                      </ul>
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
            {/* ========== Sidebar Area ========== */}
            <Sidebar />
          </div>
          <div className="row">
            {/* Start Comment */}
            <div class="mt-5 mb-5">
              <div>
                <div class="d-flex flex-column col-md-8">

                  <div class="coment-bottom bg-white p-2 px-4">
                    {comments.map((comment) => (
                      <div
                        class="commented-section mt-2">
                        <div class="d-flex flex-row align-items-center commented-user">
                          <h4 style={{ fontWeight: "bold" }}>{comment.user.username}</h4></div>
                        <div class="comment-text-sm"><span>{comment.content}</span></div>
                      </div>
                    ))}
                    <div class="d-flex flex-row add-comment-section mt-4 mb-4">
                      <input type="text" className="form-control mr-3" placeholder="Add comment" />
                      <button class="btn btn-primary" type="button">Comment</button></div>
                  </div>
                </div>
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
