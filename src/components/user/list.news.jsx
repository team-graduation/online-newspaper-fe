import React, { useContext, useEffect } from "react";
import { ArticlesContext } from "../../context/articles.context";
import { useNavigate } from "react-router-dom";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import "./card.css"


const ListNewsOfUser = () => {
    const navigate = useNavigate();
    const { setCurrentArticle, articlesOfUser = [], getNewsByUser } = useContext(ArticlesContext);
    const onArticleClickHandler = (article) => (event) => {
        navigate(`/news/${article.newsId}`);
    };

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

            <div className="main-content-wrapper section-padding-100">
                <div className="container">
                    <div className="row">
                        {articlesOfUser.map((article) => (
                            <div className="col-12 col-md-6 mb-30 card">
                                <div className="single-blog-post post-style-4 d-flex align-items-center"
                                    key={article.id}
                                    onClick={onArticleClickHandler(article)}>
                                    <div className="post-thumbnail">
                                        <img width={200} height={200} src={article.thumbnail} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <a href="#" className="headline">
                                            <h5>{article?.title}</h5>
                                        </a>
                                        <p className="clamped-text">{article?.summarization}</p>

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
                                        <div className="post-meta">
                                            <span style={{ fontSize: '15px' }}>Status: &nbsp;</span>
                                            <span style={{ fontWeight: 'bold' }}>
                                                {article?.status ? (
                                                    <span style={{ color: "green" }}>Approved</span>
                                                ) : (
                                                    <span style={{ color: "red" }}>Pending...</span>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ListNewsOfUser;
