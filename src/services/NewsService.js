import axios from 'axios';

const NEWS_API_BASE_URL = "http://localhost:8080/api/auth";

class NewsService {
    constructor() {
        this.token = JSON.parse(localStorage.getItem('user'))?.token;
    }
    getAllNews() {
        return axios.get(NEWS_API_BASE_URL + '/news');
    }

    getNewsToday() {
        return axios.get(NEWS_API_BASE_URL + '/news/today');
    }

    getNewsById(newsId) {
        return axios.get(NEWS_API_BASE_URL + '/news/' + newsId);
    }

    getNewsByCategory(categoryTitle) {
        return axios.get(NEWS_API_BASE_URL + '/news/category/' + categoryTitle);
    }

    getNewsByUser(userId) {
        return axios.get(NEWS_API_BASE_URL + '/user/' + userId + '/news')
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
}

export default new NewsService()