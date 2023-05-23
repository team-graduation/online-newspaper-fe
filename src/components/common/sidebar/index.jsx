import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArticlesContext } from "../../../context/articles.context";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { topStories, setCurrentArticle } = useContext(ArticlesContext);
  const onArticleClickHandler = (article) => (event) => {
    setCurrentArticle(article);
    navigate(`/blog/${article.id}`);
  };
  return (
    <div className="col-12 col-md-8 col-lg-4">
      <div className="post-sidebar-area wow fadeInUpBig" data-wow-delay="0.2s">
        {/* Widget Area */}
        <div className="sidebar-widget-area">
          <h5 className="title">About News</h5>
          <div className="widget-content">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        {/* Widget Area */}
        <div className="sidebar-widget-area">
          <h5 className="title">Top Stories</h5>
          <div className="widget-content">
            {/* Single Blog Post */}
            {topStories.map((story) => (
              <div
                key={story.id}
                className="single-blog-post post-style-2 d-flex align-items-center widget-post"
                onClick={onArticleClickHandler(story)}
              >
                {/* Post Thumbnail */}
                <div className="post-thumbnail">
                  <img src={story.backgroundImage} alt="" />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <a href="#" className="headline">
                    <h5 className="mb-0">{story.headline}</h5>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Widget Area */}
        <div className="sidebar-widget-area">
          <h5 className="title">Stay Connected</h5>
          <div className="widget-content">
            <div className="social-area d-flex justify-content-between">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-pinterest" />
              </a>
              <a href="#">
                <i className="fa fa-vimeo" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-google" />
              </a>
            </div>
          </div>
        </div>
        {/* Widget Area */}
        <div className="sidebar-widget-area">
          <h5 className="title">Today’s Pick</h5>
          <div className="widget-content">
            {/* Single Blog Post */}
            <div className="single-blog-post todays-pick">
              {/* Post Thumbnail */}
              <div className="post-thumbnail">
                <img src="/img/blog-img/b22.jpg" alt="" />
              </div>
              {/* Post Content */}
              <div className="post-content px-0 pb-0">
                <a href="#" className="headline">
                  <h5>
                    Newspaper Headline
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
