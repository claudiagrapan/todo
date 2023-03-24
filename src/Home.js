import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Home() {
    return (
        <div className="container">
            <h1>What are your tasks for today?</h1>
            <p>This app will help you complete them! </p>
            <nav>
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <Link to="/login">Login here</Link>
                    </li>
                    <Routes>
                        <Route path="/login/*" element={<Login />} />
                    </Routes>
                    <li>
                        <Link to="/register">Register here</Link>
                    </li>
                    <Routes>
                        <Route path="/register/*" element={<Register />} />
                    </Routes>
                </ul>
            </nav>
        </div>
    );
}
export default Home;
