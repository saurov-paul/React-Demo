const Form = (props) =>{
    return (
        
        <form type="text">

            <h3>Form</h3>
            
            <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" onChange={props.changeFormHandler}/>
            </div>

            <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" onChange={props.changeFormHandler}/>
            </div>

            <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={props.changeFormHandler}/>
            </div>

            <div>
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="number" name="phonenumber" onChange={props.changeFormHandler}/>
            </div>

            <div>
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" onChange={props.changeFormHandler}/>
            </div>
            

        </form>
    )
};
export default Form;