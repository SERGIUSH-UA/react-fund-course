import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts",
                {params:{
                    _limit: limit, _page: page
                    }});
            return response;
    }
    static async getAllData() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    }

    static async getByID(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }

    static async getCommentsByPostID(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response.data;
    }

}