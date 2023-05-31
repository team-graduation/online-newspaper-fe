import { createContext, useEffect, useState } from "react";
import NewsService from "../services/NewsService";

const ArticlesContext = createContext("");

const ArticlesContextProvider = ({ children }) => {

  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({});
  const [topStories, setTopStories] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [mostPopularArticles, setMostPopularArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  const newsAPI = NewsService;

  const getAllNews = async () => {
    try {
      const response = await NewsService.getAllNews();
      setMostPopularArticles(response.data);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    getAllNews();
  }, [])

  // useEffect(() => {
  //   const mostPopularArticles = [...Array(2).keys()].map((id) => ({
  //     id,
  //     headline: `${id}. Newspaper Headline`,
  //     author: `DiemHoang-${id}`,
  //     publicDate: new Date().toLocaleDateString(),
  //     summary:
  //       "Newspaper summary...",
  //     category: "business",
  //     backgroundImage: `/img/blog-img/b2${id}.jpg`,
  //   }));
  //   setMostPopularArticles(mostPopularArticles);
  // }, []);

  useEffect(() => {
    //TODO: thay the bang function goi api fetch top story
    // const data = await catApi.getAllCategory();
    const topStories = [...Array(5).keys()].map((id) => ({
      id,
      headline: `${id}. Newspaper Headline`,
      author: `DiemHoang-${id}`,
      publicDate: new Date().toLocaleDateString(),
      backgroundImage: `/img/blog-img/b1${id}.jpg`,
    }));
    setTopStories(topStories);
  }, []);

  useEffect(() => {
    const highlights = [...Array(10).keys()].map((id) => ({
      id,
      headline: `${id}. Newspaper Headline`,
      author: `DiemHoang-${id}`,
      publicDate: new Date().toLocaleDateString(),
      backgroundImage: `/img/blog-img/b${id}.jpg`,
    }));
    setHighlights(highlights);
  }, []);

  useEffect(() => {
    const latestArticles = [...Array(5).keys()].map((id) => ({
      id,
      headline: `${id}. Newspaper Headline`,
      author: `DiemHoang-${id}`,
      publicDate: new Date().toLocaleDateString(),
      backgroundImage: `/img/blog-img/b3${id}.jpg`,
      summary:
        "Newspaper summary...",
    }));
    setLatestArticles(latestArticles);
  }, []);

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        setArticles,
        currentArticle,
        setCurrentArticle,
        topStories,
        highlights,
        latestArticles,
        mostPopularArticles,
        filteredArticles,
        setFilteredArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesContext, ArticlesContextProvider };
