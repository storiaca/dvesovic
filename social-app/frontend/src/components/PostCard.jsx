import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const PostCard = ({ post }) => {
  const { user } = useSelector((state) => state.userStore);
  return (
    <div className="col-md-4">
      <div className="post card">
        <div className="position-absolute p-1 text-white bg-dark bg-opacity-75 rounded-top-2 w-100">
          {post.user
            ? post.user.firstName + " " + post.user.lastName
            : "Unknown"}
        </div>
        <img className="card-img-top post-image" src={post.image} alt="" />
        <div className="card-body d-flex flex-column">
          <div className="post-tag">
            {post.tags.map((tag, index) => (
              <Link key={index} to={routes.POST_TAG.realPath(tag.name)}>
                #{tag.name}
              </Link>
            ))}
          </div>
          {post.title}
          <Link
            to={routes.SINGLE_POST.realPath(post._id)}
            className="btn btn-primary form-control"
          >
            Read more
          </Link>
        </div>
        <div className="card-footer d-flex justify-content-between align-content-center gap-2">
          <Link to={""}>
            {post.likes.some((like) => like.userId === user._id) ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}
            {post.likes.length} Likes
          </Link>
          <span>{dayjs(post.createdAt).format("DD-MM-YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
