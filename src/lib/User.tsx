import React from "react";
import UserItem from "./UserItem.tsx";

const Users: React.FC = () => {
    const usersDemonstration = [
        { name: 'John', email: 'john@email.com', active: true, role: 'user' },
        { name: 'Triss', email: 'triss@gmail.com', active: false, role: 'admin' },
        { name: 'Mary', email: 'mary@email.com', active: true, role: 'listener' }
        ];
    return (
        <div>
            <h2>User List</h2>
            <ul className="list-group">
                {usersDemonstration.map((user, index) => (
                    <UserItem key={index} user={user} />
                ))}
            </ul>
        </div>
    );
};

export default Users;