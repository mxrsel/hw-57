import React from "react";

interface User {
    name: string;
    email: string;
    active: boolean;
    role: string;
}

interface UserItemProps {
    user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user}) => {
    return (
        <li className="listGroupItem">
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Active:</strong> {user.active ? "Yes" : "No"} <br />
            <strong>Role:</strong> {user.role}
        </li>
    );
};

export default UserItem;