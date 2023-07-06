import { createContext, useEffect, useState } from "react";
import NewsService from "../services/NewsService";

const ArticlesContext = createContext("");

const ArticlesContextProvider = ({ children }) => {

  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({});
  const [recommendArticles, setRecommendArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [articlesOfUser, setArticlesOfUser] = useState([]);
  const [allArticlesAdmin, setAllArticlesAdmin] = useState([]);




  const getAllNewsByAdmin = async () => {
    try {
      const response = await NewsService.getAllNews();
      setAllArticlesAdmin(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const getAllNews = async () => {
    try {
      const response = await NewsService.getAllNewsByStatus();
      setAllArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsByCategory = async (categoryId) => {
    try {
      const response = await NewsService.getNewsByCategory(categoryId);
      setFilteredArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsByUser = async () => {
    try {
      const response = await NewsService.getNewsByUser();
      setArticlesOfUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsById = async (newsId) => {
    try {
      const response = await NewsService.getNewsById(newsId);
      setCurrentArticle(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsRecommend = async () => {
    try {
      const response = await NewsService.getNewsRecommend();
      setRecommendArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsToday = async () => {
    try {
      const response = await NewsService.getNewsToday();
      setLatestArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const createNews = async (news) => {
    try {
      const response = await NewsService.createNews(news);
      getNewsByUser();
    } catch (error) {
      console.log(error)
    }
  }

  const updateNews = async (newsId, news) => {
    try {
      const response = await NewsService.updateNews(newsId, news);
      getNewsByUser();
    } catch (error) {
      console.log(error)
    }
  }

  const deleteNews = async (newsId) => {
    try {
      const response = await NewsService.deleteNews(newsId);
      getAllNewsByAdmin();
      getNewsByUser();
    } catch (error) {
      console.log(error);
    }
  }

  const searchNewsByTitle = async (title) => {
    try {
      const response = await NewsService.searchNewsByTitle(title);
    } catch (error) {
      console.log(error);
    }
  }

  const acceptNews = async (newsId) => {
    try {
      const response = await NewsService.acceptNews(newsId);
      getAllNewsByAdmin();
      getAllNews();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllNews();
    getNewsRecommend();
    getNewsToday();
    getAllNewsByAdmin();
  }, [])

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        setArticles,
        currentArticle,
        setCurrentArticle,
        recommendArticles,
        setRecommendArticles,
        latestArticles,
        filteredArticles,
        setFilteredArticles,
        articlesOfUser, 
        setArticlesOfUser,
        allArticles,
        setAllArticles,
        deleteNews,
        getNewsById,
        getNewsByCategory,
        createNews,
        updateNews,
        getNewsByUser,
        allArticlesAdmin, 
        setAllArticlesAdmin,
        getAllNewsByAdmin,
        acceptNews
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesContext, ArticlesContextProvider };
