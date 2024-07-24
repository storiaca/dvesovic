import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import Post from "../services/Post";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";

const postsPerPage = 9;

function Posts() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams(currentPage);

  let content = [];
  let pageNumber = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    Post.getAll(searchParams.get("page"), 9)
      .then((res) => {
        setPosts(res.data.posts);
        setCount(res.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams]);

  const handlePreviousPage = () => {
    setCurrentPage((page) => {
      if (page === 1) return page;
      return page - 1;
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticles = posts?.slice(indexOfFirstPost, indexOfLastPost) || [];

  content = currentArticles.map((article) => {
    return <PostCard key={article._id} post={article} />;
  });

  const onClickPaginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    posts.length > 0 && (
      <>
        <Pagination
          count={count}
          onPaginate={onClickPaginate}
          pageNumber={pageNumber}
          previousPage={handlePreviousPage}
          currentPage={currentPage}
        />
        {content}
      </>
    )
  );
}

export default Posts;
