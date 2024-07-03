import React, { useEffect, useState } from "react";
import Post from "../services/Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Post.getAll()
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return posts.length > 0 ? (
    <div>
      <h1>Posts</h1>
      {/* {posts.map((post) => {
        return (
          <div key={post._id}>
            <p>{post.title}</p>;
            <img className="w-25 img-fluid" src={post.image} alt="" />
          </div>
        );
      })} */}
    </div>
  ) : (
    "Loading..."
  );
}

export default Posts;
