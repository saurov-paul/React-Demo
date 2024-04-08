const View = (props) =>{
    return <div>
        <h2>View</h2>
        <p>First Name:{props.formData}</p>
        <p>Last Name:{props.inputValue}</p>
        <p>Email:{props.inputValue}</p>
        <p>Phone Number:{props.inputValue}</p>
        <p>Message:{props.inputValue}</p>
    </div>
    
};
export default View;