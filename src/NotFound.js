import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container">
            <h1>Oops! Something went wrong.</h1>
            <p>Here are some helpful links: </p>
            <nav>
                <ul style={{ listStyleType: "none" }}><li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/todolist">Todo List</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NotFound;