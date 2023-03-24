import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Register";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
    }

    return (
        <div className="container">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        className="form-control"
                        name="password"
                    />
                </div>
                <button className="submit" type="submit">
                    Login
                </button>
                <div className="card-body">
                    <a className="bbtn btn-success" href="/auth/google" role="button">
                        Or...Sign In with Google
                    </a>
                </div>
            </form>
            <Link to="/register">
                <button className="switch">
                    Don't have an account? Register here.
                </button>
            </Link>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}
export default Login;
