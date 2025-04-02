import React, { useState } from "react";
import Register from "./components/Register";
import View from "./components/View";
import Delete from "./components/Delete";
import Update from "./components/Update";

const App = () => {
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const refreshUsers = () => {
        setRefreshTrigger((prev) => prev + 1);
    };

    return (
        <div>
            <h1>User Registration System</h1>
            <Register onUserAdded={refreshUsers} />
            <View refreshTrigger={refreshTrigger} />
            <Update onUserUpdated={refreshUsers} />
            <Delete onUserDeleted={refreshUsers} />
        </div>
    );
};

export default App;
