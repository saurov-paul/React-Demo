const View = (props) =>{
    return <div>
        <h2>View</h2>
        <p>First Name:{props.firstname}</p>
        <p>Last Name:{props.lastname}</p>
        <p>Email:{props.email}</p>
        <p>Phone Number:{props.phonenumber}</p>
        <p>Message:{props.message}</p>
    </div>
    
};
export default View;