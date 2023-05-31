import axios from 'axios';

const NEWS_API_BASE_URL = "http://localhost:8080/api/auth";

class NewsService {

    getAllNews(){
        return axios.get(NEWS_API_BASE_URL + '/news');
        // axios({
        //     method: 'post',
        //     url: '/user/12345',
        //     data: {
        //       firstName: 'Fred',
        //       lastName: 'Flintstone'
        //     }
        //   });
    }

    getNewsById(newsId){
        return axios.get(NEWS_API_BASE_URL + '/news/' + newsId);
    }

    createNews(userId, news){
        return axios.post(NEWS_API_BASE_URL + '/user/' + userId + '/news', news);
    }

    updateNews(newsId, news){
        return axios.put(NEWS_API_BASE_URL + '/news/' + newsId, news);
    }

    deleteNews(newsId){
        return axios.delete(NEWS_API_BASE_URL + '/news/' + newsId);
    }
}

export default new NewsService()