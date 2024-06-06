import React, { useState } from "react";

const UserForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [active, setActive] = useState(false);
    const [role, setRole] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted: ', email, name, active, role);
    };
    const handleActiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActive(e.target.checked);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create User</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" id="active" className="form-check-input" checked={active} onChange={handleActiveChange} />
                <label htmlFor="active" className="form-check-label">Active</label>
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">Role:</label>
                <select id="role" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrator</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );

}