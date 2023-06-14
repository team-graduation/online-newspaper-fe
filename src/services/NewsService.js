import axios from 'axios';

const NEWS_API_BASE_URL = "http://localhost:8080/api/auth";

class NewsService {
    constructor() {
        this.token = JSON.parse(localStorage.getItem('user'))?.token;
    }
    getAllNews() {
        return axios({
            method: 'get',
            url: NEWS_API_BASE_URL + '/admin/news',
            headers: {
                Authorization: 'Bearer ' + this.token,
            }
        })
    }

    getAllNewsByStatus() {
        return axios.get(NEWS_API_BASE_URL + '/news');
    }

    getNewsToday() {
        return axios.get(NEWS_API_BASE_URL + '/news/today');
    }

    getNewsById(newsId) {
        return axios.get(NEWS_API_BASE_URL + '/news/' + newsId);
    }

    getNewsByCategory(categoryId) {
        return axios.get(NEWS_API_BASE_URL + '/news/category/' + categoryId);
    }

    getNewsByUser() {
        return axios({
            method: 'get',
            url: NEWS_API_BASE_URL + '/user/news',
            headers: {
                Authorization: 'Bearer ' + this.token,
            }
        })
    }

    getNewsRecommend() {
        return axios.get(NEWS_API_BASE_URL + '/news/recommend')
    }

    createNews(news) {
        return axios({
            method: 'post',
            url: NEWS_API_BASE_URL + '/news/add',
            data: news,
            headers: {
                Authorization: 'Bearer ' + this.token,
                "Content-Type": "multipart/form-data",
            }
        })
    }

    updateNews(newsId, news) {
        return axios({
            method: 'put',
            url: NEWS_API_BASE_URL + '/news/' + newsId,
            data: news,
            headers: {
                Authorization: 'Bearer ' + this.token,
                "Content-Type": "multipart/form-data",
            }
        })
    }

    deleteNews(newsId) {
        return axios({
            method: 'delete',
            url: NEWS_API_BASE_URL + '/news/' + newsId,
            headers: {
                Authorization: 'Bearer ' + this.token,
            }
        });
    }

    searchNewsByTitle(title) {
        return axios.get(NEWS_API_BASE_URL + '/news/search', title);
    }
}

export default new NewsService()