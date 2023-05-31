import { createContext, useEffect, useState } from "react";
import CategoryService from "../services/CategoryService";

const CategoriesContext = createContext("");

const CategoriesContextProvider = ({ children }) => {

  const [categories, setCategories] = useState([]);

  const categoriesAPI = CategoryService;

  const getAllCategory = async () => {
    try {
      const response = await CategoryService.getAllCategory();
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    getAllCategory();
  }, [])

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesContextProvider };
