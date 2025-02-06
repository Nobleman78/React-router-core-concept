import { useRef } from "react";

const UseRef = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input
                ref={nameRef}
                    type="text"
                    id="name"
                    placeholder="Enter your name"

                />
                <br /><br />
                <input
                ref={emailRef}
                    type="text"
                    id="email"
                    placeholder="Enter your email"

                />
                <br /><br />
                <input
                ref={passwordRef}
                    type="password"
                    id="password"
                    placeholder="Enter your password"

                />
                <br /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UseRef;