import React, { useState } from "react";
import { createPost } from "../api";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css"; // Import the CSS file

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost({ title, description });
            navigate("/list");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Create a New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        className="form-input"
                        placeholder="Enter blog title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        className="form-input"
                        placeholder="Write your blog content here..." 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required
                    />
                </div>
                <button type="submit" className="form-btn">Create Post</button>
            </form>

            {/* Footer with Numetry Technologies & Your Name */}
            <p className="footer-text">
                🚀 Numetry Technologies Task | Made by Intern <strong>Aditya Jadhav</strong>
            </p>
        </div>
    );
};

export default CreatePost;
