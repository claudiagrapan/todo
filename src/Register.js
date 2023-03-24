import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
    }
    return (
        <div className="container">
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Full Name: </label>
                    <input
                        value={name}
                        name="name"
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email"> Email:</label>
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
                <button type="submit" className="submit">
                    Register
                </button>
            </form>
            <div className="card-body">
                <a className="btn btn-block" href="/auth/google" role="button">
                    Or...Register with Google
                </a>
            </div>
            <Link to="/login">
                <button className="switch">
                    Already have an account? Sign in here.
                </button>
            </Link>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}
export default Register;
