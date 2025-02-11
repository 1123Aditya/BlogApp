import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import ListPosts from "./components/ListPosts";
import "./App.css"; // Import CSS for styling

const Navbar = () => {
    const location = useLocation(); // Get the current route

    return (
        <nav className="navbar">
            <div className="nav-container">
                {location.pathname === "/" ? (
                    <Link to="/list" className="nav-btn list-btn">📜 View Posts</Link>
                ) : (
                    <Link to="/" className="nav-btn create-btn">➕ Create Post</Link>
                )}
            </div>
        </nav>
    );
};

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CreatePost />} />
                <Route path="/list" element={<ListPosts />} />
            </Routes>
        </Router>
    );
};

export default App;
