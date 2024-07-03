import { useEffect, useState } from "react";
import Post from "../services/Post";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Post.getAll()
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {/* {posts &&
        posts.map((post) => {
          return (
            <div key={post._id}>
              <p>{post.title}</p>;
              <img className="w-25 img-fluid" src={post.image} alt="" />
            </div>
          );
        })} */}
    </div>
  );
};

export default Posts;
