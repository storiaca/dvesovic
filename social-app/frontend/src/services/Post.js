import axios from "axios";

class Post {
    static getAll = () => axios.get("/posts");
}

export default Post;