import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const View = ({ refreshTrigger }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        viewData();
    }, [refreshTrigger]); // Re-fetch when `refreshTrigger` changes

    const viewData = async () => {
        try {
            const res = await axios.get("http://localhost:9000/users");
            if (Array.isArray(res.data)) {
                setUsers(res.data);
            } else {
                console.error("Unexpected response format:", res.data);
                setUsers([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setUsers([]);
        }
    };

    return (
        <div className="viewthetable" >
            <h2>User List</h2>
            {users.length > 0 ? (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users available.</p>
            )}
        </div>
    );
};

export default View;
