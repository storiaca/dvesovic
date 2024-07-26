import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import Post from "../services/Post";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams(1);

  useEffect(() => {
    Post.getAll(searchParams.get("page") || 1, 9)
      .then((res) => {
        setPosts(res.data.posts);
        setCount(res.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams]);

  return (
    posts.length > 0 && (
      <>
        <Pagination count={count} />
        {posts.map((article) => (
          <PostCard key={article._id} post={article} />
        ))}
        <Pagination count={count} />
      </>
    )
  );
}

export default Posts;
