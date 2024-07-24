import axios from "axios";

class Post {
  static getAll = (page, limit) =>
    axios.get(`/posts?page=${page}&limit=${limit}`);
  static addNew = (data) => axios.post("/posts", data);
  static getPostByTag = (tagName) => axios.get(`/posts/tag/${tagName}`);
  static getSinglePost = (id) => axios.get(`/posts/${id}`);
  static addComment = (body) => axios.post(`/posts/comments/add`, body);
  static getPostBySearch = (data) => axios.get(`/posts/search?${data}`);
}

export default Post;
