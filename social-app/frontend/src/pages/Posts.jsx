import React, {useEffect, useState} from 'react';
import Post from "../services/Post";

function Posts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Post.getAll()
            .then((res) => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((error) => {
                    console.log(error);
                }
            );
    }, []);

    return posts.length > 0 ? (
        <div>
            {posts.map((post) => {
                return <div key={post._id}>
                    <p>{post.title}</p>;
                    <img className="w-25 img-fluid" src={post.image} alt=""/>
                </div>;
            })}

        </div>
    ) : "Lodaing..."

        ;
}

export default Posts;