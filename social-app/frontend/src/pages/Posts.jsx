import React, { useEffect, useState } from "react";
import Post from "../services/Post";
import PostCard from "../components/PostCard";

function Posts() {
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
  return posts.length > 0 ? (
    posts.map((post) => <PostCard key={post._id} post={post} />)
  ) : (
    <p>Loading...</p>
  );
}

export default Posts;
