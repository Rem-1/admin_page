import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
    // Get
    static getPosts(){
        return new Promise((resolve, reject) => {
            try {
                axios
                .get(url)
                .then(result => {
                    resolve(result.data)
                });
            } catch (error) {
                reject(error);
            }
        })
    }
    // Create
    static insertPost(object) {
        return axios
        .post(url, object);
    }
    // Delete
    static deletePost(id) {
        return axios
        .delete(`${url}${id}`)
    }
    // Update
    static updatePost(id, data) {
        return axios
        .patch(`${url}${id}`, data)
    }
}

export default PostService;