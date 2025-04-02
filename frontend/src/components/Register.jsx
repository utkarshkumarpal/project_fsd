import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Register = ({ onUserAdded }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !age) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const user = { name, age };
            await axios.post("http://localhost:9000/users", user);
            alert("User registered successfully!");
            setName(""); // Clear input fields
            setAge("");

            if (onUserAdded) {
                onUserAdded(); // Refresh the user list in View.js
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Failed to register user.");
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                
                <label>Age: </label>
                <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} />

                <button className="btn" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
