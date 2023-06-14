import axios from 'axios';

const COMMENT_API_BASE_URL = "http://localhost:8080/api/auth";

class CommentService {
    constructor() {
        this.token = JSON.parse(localStorage.getItem('user'))?.token;
    }

    getCommentByNews(newsId){
        return axios.get(COMMENT_API_BASE_URL + '/news/' + newsId + '/comments');
    }

    createComment(newsId, comments){
        return axios({
            method: 'post',
            url: COMMENT_API_BASE_URL + '/news/' + newsId + '/comments',
            data: comments,
            headers: {
                Authorization: 'Bearer ' + this.token,
            }
        });
    }

    updateComment(commentId, comments){
        return axios({
            method: 'put',
            url: COMMENT_API_BASE_URL + '/comments/' + commentId,
            data: comments,
            headers: {
                Authorization: 'Bearer ' + this.token,
            }
        });
    }

    deleteComment(commentId){
        return axios({
            method: 'delete',
            url: COMMENT_API_BASE_URL + '/comments/' + commentId,
            headers: {
                Authorization: 'Bearer ' + this.token,
            }
        });
    }
}

export default new CommentService()