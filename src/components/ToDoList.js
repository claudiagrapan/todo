import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    function addItem() {
        if (inputValue.length >= 3) {
            setItems((prevItems) => {
                return [...prevItems, inputValue];
            })
        }
        else {
            alert("Input must be at least 3 characters long.");
        }
        setInputValue("");
    }
    function handleKeyPress(event) {
        if (event.code === "Enter") {
            addItem();
        }
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>What's your plan today?</h1>
            </div>
            {items.length < 10 ? (
                <div className="form">
                    <input
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        type="text"
                        value={inputValue} />
                    <button onClick={addItem} >
                        <span>+</span>
                    </button>
                </div>) : (<p>You have reached the maximum number of items.</p>)}


            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem key={index} id={index} text={todoItem} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
