import { useEffect, useState } from "react";
import Post from "../services/Post";
import PostCard from "../components/PostCard";
import { useSearchParams } from "react-router-dom";

function SearchPosts() {
  const [searchPosts, setSearchPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    Post.getPostBySearch(searchParams.toString())
      .then((res) => {
        console.log(res.data);
        setSearchPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams]);
  return searchPosts.length > 0 ? (
    searchPosts.map((post) => <PostCard key={post._id} post={post} />)
  ) : (
    <p>Loading...</p>
  );
}

export default SearchPosts;
