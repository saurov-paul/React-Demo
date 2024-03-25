import Box from "./Box.jsx"
import './App.css'
import {useState} from "react"

function App() {
  const [Counter, setCounter] = useState(0)
  const [persons, setPersons] = useState([
    {id: 1, name: " Saurov", title: " Developer", location: " Helsinki"},
    {id: 2, name: " Robin", title: " cookie", location: " France"},
    {id: 3,  name: " Jahid", title: " Manager", location: " Bangladesh"}
  ]);

  const increase =() => {
    setCounter(Counter + 1)
  };
  const decrease =() =>{
    setCounter(Counter - 1)
  }
  const reset = () => {
    setCounter(0)
  }

  return (
    <>

    <p>Counter: {Counter}</p>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>

    {persons.map((person) => (
      <Box key ={person.id}
      name={person.name}
      title ={person.title}
      location= {person.location} 
      />
      
    
  
    ))}

    
      
    </>
  )
}

export default App
