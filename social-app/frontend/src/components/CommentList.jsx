import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import dayjs from "dayjs";
import Comments from "../services/Comments";
import { toast } from "react-toastify";

const CommentList = ({ comments }) => {
  const deleteHandler = (id, postId) => {
    Comments.deleteComment(id, postId)
      .then((res) => {
        console.log(res.data);
        toast("Comment deleted", { type: "success" });
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="commentList">
      {comments.map((comment) => {
        return (
          <div className="comment" key={comment._id}>
            <h6>
              {comment.user.firstName} {comment.user.lastName}
            </h6>
            <p>{comment.body}</p>
            <span>{dayjs(comment.createAt).format("DD-MM-YYYY")}</span>

            <button
              onClick={() => deleteHandler(comment._id, comment.postId)}
              className="btn btn-danger btn-sm comment-delete"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
