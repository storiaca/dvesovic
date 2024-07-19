import { Link, useParams } from "react-router-dom";
import Post from "../services/Post";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import AddCommentForm from "../components/AddCommentForm";
import CommentList from "../components/CommentList";

const SinglePost = () => {
  const { id } = useParams();
  const { data, isSuccess, refetch } = useQuery({
    queryKey: ["singlePost"],
    queryFn: () => Post.getSinglePost(id),
  });
  let post = isSuccess && data.data;
  return (
    isSuccess && (
      <div className="container">
        <div className="row my-5 box py3">
          <div className="col-md-6">
            <h3>{post.title}</h3>
            <div className="post-tag">
              {post.tags.length > 0
                ? post.tags.map((tag) => (
                    <Link key={tag.name}>#{tag.name}</Link>
                  ))
                : null}
            </div>
            <p>{post.body}</p>
            <h6>
              {post.user.firstName} {post.user.lastName}
            </h6>
            <p>Published: {dayjs(post.createdAt).format("DD-MM-YYYY")}</p>
            <hr />
            <AddCommentForm postId={post._id} reftch={refetch} />
            <hr />
            <CommentList comments={post.comments} />
          </div>

          <div className="col-md-6">
            <img
              className="post-details-image rounded-2"
              src={post.image}
              alt=""
            />
          </div>
        </div>
      </div>
    )
  );
};

export default SinglePost;
