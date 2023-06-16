import React, { useContext, useState } from "react";
import { Header } from "../../common/header/index";
import { Footer } from "../../common/footer/index";
import { useNavigate } from "react-router-dom";
import "../../admin/table.css";
import "../../admin/modal.css"
import { ArticlesContext } from "context/articles.context";

const News = () => {
    const navigate = useNavigate();
    const [pendingDeleteArticle, setPendingDeleteArticle] = useState({});
    const [isDeletingArticle, setIsDeleteArticle] = useState(false);
    const { allArticlesAdmin, setCurrentArticle, deleteNews, acceptNews } = useContext(ArticlesContext);

    const onArticleClickHandler = (article) => (event) => {
        setCurrentArticle(article);
        navigate(`/admin/news/edit/${article.newsId}`);
    };

    const onDeleteNewsClickHandler = (article) => (event) => {
        setIsDeleteArticle(true);
        setPendingDeleteArticle(article);
    }

    const onAcceptNewsClickHandler = (article) => (event) => {
        acceptNews(article.newsId);
        const button = event.target;
        button.classList.add("red-color");
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

    return (
        <div>
            <Header />
            <div style={{ marginTop: '100px' }} className="row">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <div className="container">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>News</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="/admin/news/add" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add News</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Authour</th>
                                    <th>Published Day</th>
                                    <th>Status</th>
                                    <th>Accept</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allArticlesAdmin.map((articles) => (
                                    <tr>
                                        <td style={{ fontWeight: "bold" }}>{articles.newsId}</td>
                                        <td onClick={onArticleClickHandler(articles)}>{articles.title}</td>
                                        <td>{articles.category?.categoryTitle}</td>
                                        <td>{articles.user?.username}</td>
                                        <td>{new Date(articles.addedDate).toLocaleDateString()}</td>
                                        <td>
                                            {articles?.status ? (
                                                <span style={{ color: "green" }}>Approved</span>
                                            ) : (
                                                <span style={{ color: "red" }}>Pending...</span>
                                            )}
                                        </td>
                                        <td><button type="button" class="btn btn-warning" onClick={onAcceptNewsClickHandler(articles)}>Accept</button></td>
                                        <td>
                                            <a onClick={onArticleClickHandler(articles)} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                            <a onClick={onDeleteNewsClickHandler(articles)} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>100</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Previous</a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item active"><a href="#" className="page-link">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </div>
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
    )
};

export default News