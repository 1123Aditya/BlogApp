import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const ListPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const { data } = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        getPosts();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Blog Posts</h2>
            {posts.length === 0 ? <p>No posts available</p> : (
                <ul className="list-group">
                    {posts.map((post) => (
                        <li key={post._id} className="list-group-item">
                            <h5>{post.title}</h5>
                            <p>{post.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListPosts;
