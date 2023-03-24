import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ToDoList from "./components/ToDoList";
import NotFound from "./NotFound";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
      <Route path="/todolist/*" element={<ToDoList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
