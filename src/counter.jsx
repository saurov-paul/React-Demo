const Counter = (props) =>{
    return(
        <div>
    <p>Counter: {props.counter}</p>
    <button onClick={props.clickIncHandler}>Increase</button>
    <button onClick={props.clickDecHandler}>Decrease</button>
    <button onClick={props.clickResetHandler}>Reset</button>
    </div>
    );
};

export default Counter;