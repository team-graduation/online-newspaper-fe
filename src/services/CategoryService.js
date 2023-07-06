import axios from 'axios';

const CATEGORY_API_BASE_URL = "http://localhost:8080/api/auth/categories";

class CategoryService {

    getAllCategory(){
        return axios.get(CATEGORY_API_BASE_URL);
    }

    getCategoryById(categoryId){
        return axios.get(CATEGORY_API_BASE_URL + categoryId);
    }

    createCategory(category){
        return axios.post(CATEGORY_API_BASE_URL, category);
    }

    updateCategory(category, categoryId){
        return axios.put(CATEGORY_API_BASE_URL + '/' + categoryId, category);
    }

    deleteCategory(categoryId){
        return axios.delete(CATEGORY_API_BASE_URL + '/' + categoryId);
    }
}

export default new CategoryService()