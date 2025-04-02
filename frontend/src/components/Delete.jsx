import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Delete = ({ onUserDeleted }) => {
    const [id, setId] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!id) {
            alert("Please enter a valid user ID.");
            return;
        }

        try {
            await axios.delete(`http://localhost:9000/users/${id}`);
            alert(`User with ID ${id} deleted successfully`);
            
            // Clear input field after delete
            setId("");

            if (onUserDeleted) {
                onUserDeleted(); // Refresh View component
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete user. Please check the ID and try again.");
        }
    };

    return (
        <div>
            <h1>Delete User</h1>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default Delete;
