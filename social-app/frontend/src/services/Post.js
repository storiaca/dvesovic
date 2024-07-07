import axios from "axios";

class Post {
  static getAll = () => axios.get("/posts");
  static getPostByTag = (tagName) => axios.get(`/posts/tag/${tagName}`);
}

export default Post;
