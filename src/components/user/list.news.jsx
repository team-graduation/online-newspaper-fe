import React, { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../../context/articles.context";
import { useNavigate } from "react-router-dom";
import { Header } from "../common/header";
import { Footer } from "../common/footer";
import "./card.css"

const ListNewsOfUser = () => {
    const navigate = useNavigate();
    const [pendingDeleteArticle, setPendingDeleteArticle] = useState({});
    const [isDeletingArticle, setIsDeleteArticle] = useState(false);
    const { setCurrentArticle, articlesOfUser = [], getNewsByUser, deleteNews } = useContext(ArticlesContext);
    const onArticleClickHandler = (article) => (event) => {
        navigate(`/news/${article.newsId}`);
    };

    // const onDeleteNewsClickHandler = (article) => (event) => {
    //     deleteNews(article.newsId);
    // }

    const onEditArticleClickHandler = (article) => (event) => {
        setCurrentArticle(article);
        navigate(`/admin/news/edit/${article.newsId}`);
    };

    const onDeleteNewsClickHandler = (article) => (event) => {
        setIsDeleteArticle(true);
        setPendingDeleteArticle(article);
    }

    const onConfirmDeleteHandler = (e) => {
        e.preventDefault();
        deleteNews(pendingDeleteArticle.newsId);
        setIsDeleteArticle(false);
    }

    const onCancelDeleteHandler = (e) => {
        e.preventDefault();
        setIsDeleteArticle(false);
        setPendingDeleteArticle({});
    }

    useEffect(() => {
        getNewsByUser();
    }, []);
    return (
        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster&effect=shadow-multiple" />
            <Header />
            <div
                className="hero-area height-400 bg-img background-overlay"
                style={{ backgroundImage: "url(https://cdn.xxl.thumbs.canstockphoto.com/daily-newspaper-and-small-wooden-cubes-with-the-words-daily-news-stock-photo_csp44333943.jpg)" }}
            />
            <div class="w3-container w3-lobster" style={{ marginTop: 10, textAlign: 'center' }}>
                <p class="w3-xxxlarge font-effect-shadow-multiple">My newspaper</p>
            </div>
            <div className="col-md-3" style={{ float:'right' }}>
                <a href="/news/add" className="btn btn-success w3-round"><i class="fa fa-plus"></i><span>Add News</span></a>
            </div>
            <div className="main-content-wrapper section-padding-50">
                <div className="container">
                    <div className="row">
                        {articlesOfUser.map((article) => (
                            <div className="col-12 col-md-6 mb-30 card">
                                <div className="single-blog-post post-style-4 d-flex align-items-center"
                                    key={article.id}>
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
                                        <div class="row" style={{ background: "#97CBC8", borderRadius: "10px " }}>
                                            <div className="col-12 col-md-4">
                                                <a onClick={onArticleClickHandler(article)} data-toggle="modal"><i class="fa fa-eye" style={{ fontSize: '23px', color: 'black' }}></i></a>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <a onClick={onEditArticleClickHandler(article)} data-toggle="modal"><i class="fa far fa-edit" style={{ fontSize: '23px', color: '#FF8000' }}></i></a>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <a onClick={onDeleteNewsClickHandler(article)} data-toggle="modal"><i class="fa fa-trash-o" style={{ fontSize: '23px', color: 'red' }}></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>


                {/* Modal delete */}
                {isDeletingArticle &&
                    <div style={{ display: "block" }} id="myModal" class="modal">
                        <div class="modal-dialog modal-confirm">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <p>Do you really want to delete these records? This process cannot be undone.</p>
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <button onClick={onCancelDeleteHandler} type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button onClick={onConfirmDeleteHandler} type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};
export default ListNewsOfUser;
