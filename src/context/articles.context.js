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


  const getAllNews = async () => {
    try {
      const response = await NewsService.getAllNews();
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

  const getNewsById = async (categoryId) => {
    try {
      const response = await NewsService.getNewsById(categoryId);
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
    } catch (error) {
      console.log(error)
    }
  }

  const updateNews = async (newsId, news) => {
    try {
      const response = await NewsService.updateNews(newsId, news);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteNews = async (newsId) => {
    try {
      const response = await NewsService.deleteNews(newsId);
      getAllNews();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllNews();
    getNewsRecommend();
    getNewsToday();
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
        allArticles,
        setAllArticles,
        deleteNews,
        getNewsById,
        getNewsByCategory,
        createNews,
        updateNews
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesContext, ArticlesContextProvider };
