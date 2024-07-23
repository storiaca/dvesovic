import axios from "axios";

class Comments {
  static deleteComment = (id, postId) =>
    axios.delete(`/comments/${id}?postId=${postId}`);
}

export default Comments;
