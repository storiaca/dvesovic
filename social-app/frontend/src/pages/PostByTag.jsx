import React, { useEffect, useState } from "react";
import Post from "../services/Post";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

function PostByTag(props) {
  const [posts, setPosts] = useState([]);
  const { tagName } = useParams();
  useEffect(() => {
    setPosts([]);
    Post.getPostByTag(tagName)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tagName]);

  return posts.length > 0 ? (
    posts.map((post) => <PostCard key={post._id} post={post} />)
  ) : (
    <p>Loading...</p>
  );
}

export default PostByTag;
