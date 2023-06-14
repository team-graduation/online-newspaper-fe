import { createContext, useEffect, useState } from "react";
import CommentService from "../services/CommentService";

const CommentContext = createContext("");

const  CommentContextProvider = ({ children }) => {

  const [comments, setComments] = useState([]);

  const getCommentByNews = async (newsId) => {
    try {
      
      const response = await CommentService.getCommentByNews(newsId);
      console.log(response);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const createComment = async (newsId, comments) => {
    try {
      const response = await CommentService.createComment(newsId, comments);
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   getCommentByNews();
  // }, [])

  return (
    <CommentContext.Provider
      value={{
        comments,
        setComments,
        getCommentByNews,
        createComment
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export { CommentContext, CommentContextProvider };
