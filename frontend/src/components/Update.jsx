import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Update = ({ onUserUpdated }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!id || !name || !age) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const data = { name, age };
            await axios.put(`http://localhost:9000/users/${id}`, data);
            alert(`User with ID ${id} updated successfully`);

            // Clear input fields after update
            setId("");
            setName("");
            setAge("");

            if (onUserUpdated) {
                onUserUpdated(); // Refresh View component
            }
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Failed to update user. Please check the ID and try again.");
        }
    };

    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <label>
                    ID:
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Age:
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
