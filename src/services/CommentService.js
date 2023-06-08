import axios from 'axios';

const COMMENT_API_BASE_URL = "http://localhost:8080/api/auth";

class CommentService {

    getCommentByNews(newsId){
        return axios.get(COMMENT_API_BASE_URL + '/news/' + newsId + '/comments');
    }

    createComment(newsId, userId, comments){
        return axios.post(COMMENT_API_BASE_URL + '/news/' + newsId + '/user/' + userId + '/comments', comments);
    }

    updateComment(commentId, comments){
        return axios.put(COMMENT_API_BASE_URL + '/comments/' + commentId, comments);
    }

    deleteComment(commentId){
        return axios.delete(COMMENT_API_BASE_URL + '/comments/' + commentId);
    }
}

export default new CommentService()