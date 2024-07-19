import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import dayjs from "dayjs";

const CommentList = ({ comments }) => {
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

            <button className="btn btn-danger btn-sm comment-delete">
              <FaRegTrashAlt />
            </button>
          </div>
        );
      })}
    </div>
  );
};
// 32:31
export default CommentList;
