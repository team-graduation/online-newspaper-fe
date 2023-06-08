import { createContext, useEffect, useState } from "react";
import CommentService from "../services/CommentService";

const CommentContext = createContext("");

const  CommentContextProvider = ({ children }) => {

  const [comments, setComments] = useState({});

  const commentAPI = CommentService;

  const getCommentByNews = async (newsId) => {
    try {
      const response = await CommentService.getCommentByNews(newsId);
      setComments(response.data);
    } catch (error) {
      console.log(error);
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
        getCommentByNews
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export { CommentContext, CommentContextProvider };
