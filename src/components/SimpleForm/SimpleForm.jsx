const SimpleForm = () => {
    const handleSubmit = e =>{
        console.log('Form Submitted');
    }
    return (
        <div>
            <h2>Simple Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                <input type="submit" value="submit"></input>
            </form>
        </div>
    );
};

export default SimpleForm;