import axios from "axios";

class Post {
  static getAll = () => axios.get("/posts");
  static getPostByTag = (tagName) => axios.get(`/posts/tag/${tagName}`);
  static getSinglePost = (id) => axios.get(`/posts/${id}`);
  static addComment = (body) => axios.post(`/posts/comments/add`, body);
}

export default Post;
