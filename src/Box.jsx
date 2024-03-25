function App() {
    const [count, setCount] = useState(0)
  
    return (
      <div>
        <h1>Name:</h1>
        <p>Title:</p>
        <p>Location:</p>
      </div>
    )
  }

  const Box =(props) => {
    return (
        <div>
        <h1>Name:{props.name}</h1>
        <p>Title:{props.title}</p>
        <p>Location:{props.location}</p>
      </div>

    )
  }

  export default Box;