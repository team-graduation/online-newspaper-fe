import { createContext, useEffect, useState } from "react";
import CategoryService from "../services/CategoryService";

const CategoryContext = createContext("");

const CategoryContextProvider = ({ children }) => {

  const [allCategories, setAllCategiries] = useState([]);
  // const [filteredArticles, setFilteredArticles] = useState([]);


  const getAllCategory = async () => {
    try {
      const response = await CategoryService.getAllCategory();
      setAllCategiries(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  // const getNewsByCategory = async (categoryId) => {
  //   try {
  //     const response = await NewsService.getNewsByCategory(categoryId);
  //     setFilteredArticles(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getAllCategory();
  }, [])

  return (
    <CategoryContext.Provider
      value={{
        allCategories,
        setAllCategiries,
        // filteredArticles,
        // setFilteredArticles,
        // getNewsByCategory
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryContextProvider };
