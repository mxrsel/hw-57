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

}