import { createContext, useEffect, useState } from "react";
import CategoryService from "../services/CategoryService";

const CategoryContext = createContext("");

const CategoryContextProvider = ({ children }) => {

  const [allCategories, setAllCategiries] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});


  const getAllCategory = async () => {
    try {
      const response = await CategoryService.getAllCategory();
      setAllCategiries(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  const getCategoryById = async () => {
    try {
      const response = await CategoryService.getCategoryById();
      setCurrentCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCategory();
  }, [])

  return (
    <CategoryContext.Provider
      value={{
        allCategories,
        setAllCategiries,
        currentCategory, 
        setCurrentCategory,
        getCategoryById
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryContextProvider };
