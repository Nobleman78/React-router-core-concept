import { useState } from "react";

const StateFull = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:",password);

        setName('');
        setEmail('');
        setPassword('');


    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input
                type="text"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) =>setName(e.target.value)}
                required 
            />
            <br/>

            <label htmlFor="email">Email:</label><br />
            <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />
            <label htmlFor="password">Password</label><br />
            <input
             type="password" 
             id="password"
             value={password}
             placeholder="Enter your password"
             onChange={(e)=>setPassword(e.target.value)}
             required

            />
            <br />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
};



export default StateFull;