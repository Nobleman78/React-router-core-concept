import useInputState from "../../Hook/UseInputState";

const HookForm = () => {
    // const [name,handleNameChange] = useInputState('Jesmin Chakma');
    const emailState = useInputState('jesminchkma@gmail.com');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                {/* <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"

                /> */}
                <br />
                <br />
                <input
                    {
                        ...emailState
                    }
                    type="text"
                    id="email"
                    placeholder="Enter your email"

                />
                <br />
                <br />
                <input
                    type="password"
                    id="name"
                    placeholder="Enter your password"

                />
                <br />
                <br />
                <input type="submit" value="submit" />

            </form>

        </div>
    );
};

export default HookForm;