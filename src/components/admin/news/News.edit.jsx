import { useEffect, useState, useContext } from "react";
import Editor from "../editor/index";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../../../context/articles.context";
import { useNavigate } from "react-router-dom";
import { Header } from "../../common/header";
import { Footer } from "../../common/footer";
import DefaultImage from '../../../assets/img/default-img.jpg';

const NewsEdittingPage = () => {
    const navigate = useNavigate();
    const { createNews, updateNews, currentArticle = {}, getNewsById, setCurrentArticle } = useContext(ArticlesContext);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [thumbnail, setThumbnail] = useState();
    const [thumbnailUrl, setThumbnailUrl] = useState();
    const [isEditting, setIsEditting] = useState(false);
    const [articleOnEdit, setArticleOnEdit] = useState();
    const params = useParams();
    const { id: articleId } = params;

    const onEditorContentChange = (value) => {
        setContent(value);
    };
    const onBackgroundImageSelected = (e) => {
        const file = e.target.files[0];
        setThumbnail(file);
    };

    useEffect(() => {
        try {
            if (!thumbnail) return;
            if (thumbnailUrl) URL.revokeObjectURL(thumbnailUrl);
            const image = URL.createObjectURL(thumbnail);
            setThumbnailUrl(image);
        } catch (e) {
            console.log(e);
        }

    }, [thumbnail]);

    useEffect(() => {
        if (!articleId) return;
        setIsEditting(true);
        getNewsById(articleId);
    }, [articleId])

    useEffect(() => {
        if (isEditting) setArticleOnEdit(currentArticle)
    }, [currentArticle])

    useEffect(() => {
        if (!articleOnEdit) return;
        setTitle(articleOnEdit.title);
        setContent(articleOnEdit.content);
    }, [articleOnEdit])

    const onSubmitNewsHandler = () => {
        let newArticle = new FormData();
        newArticle.append('title', title);
        newArticle.append('content', content);
        newArticle.append('thumbnail', thumbnail);

        createNews(newArticle);
        navigate(`/user/news`);
    }

    const onEditNewsHandler = () => {
        let newArticle = new FormData();
        newArticle.append('title', title);
        newArticle.append('content', content);
        newArticle.append('thumbnail', thumbnail);

        updateNews(articleId, newArticle);
        // navigate(`/news/${articleId}`);
        navigate(`/user/news`);
    }

    return (
        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster&effect=shadow-multiple" />
            <Header />
            <div className="hero-area section-padding-100 container">
                <div className="label-area content--space-between">
                    <div class="w3-container w3-lobster">
                        <p class="w3-xxxlarge font-effect-shadow-multiple">Newspaper</p>
                    </div>
                </div>
                <div className="label-area padding-top-100">
                    <label className="col-lg-2 label-rich-text">Title</label>
                    <div>
                        <textarea
                            // type="text-area"
                            type="text"
                            placeholder="Enter title here....."
                            id="title"
                            value={title}
                            rows="4"
                            cols="100"
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ resize: "none" }}
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="label-area">
                    <label className="col-lg-2 label-rich-text">Thumbnail</label>
                    <div className="img-input">
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/png, image/jpeg"
                            onChange={onBackgroundImageSelected}
                        ></input>
                        <img height={300} width={300 / 6 * 10} src={thumbnailUrl || DefaultImage} />
                        {articleOnEdit && !thumbnailUrl && <img height={300} width={300 / 6 * 10} src={articleOnEdit?.thumbnail} />}
                    </div>
                </div>
                <Editor
                    className="hero-area"
                    content={content}
                    onEditorContentChange={onEditorContentChange}
                />
                <div className="label-area content--space-between padding-top-100">
                    <div class="w3-container">
                        
                    </div>
                    <div className="load-more-btn text-center">
                        <div className="edit-newspaper__submit w3-round" onClick={(e) => isEditting ? onEditNewsHandler() : onSubmitNewsHandler()}>
                            {isEditting ? 'UPDATE' : 'CREATE'}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NewsEdittingPage;
