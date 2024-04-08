import Box from "./Box.jsx";
import "./App.css";
import { useState } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Counter from "./counter.jsx";
import Form from "./Form.jsx";
import View from "./View.jsx"

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([
    { id: 1, name: " Saurov", title: " Developer", location: " Helsinki" },
    { id: 2, name: " Robin", title: " cookie", location: " France" },
    { id: 3, name: " Jahid", title: " Manager", location: " Bangladesh" },
  ]);

  const [inputValue, setInputValue] = useState("")
  const [formData, setFromData] = useState({
    firtname:" ",
    lastname:" ",
    email: " ",
    phonenumber: " ",
    message: " ",
  });

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };


  const changeFormHandler =(event) =>{


    const {name , value  } = event.target;
      setFromData({[name]: value});
  
      
    setFromData((prevState) => ({...prevState, [name]: value}))
    console.log(formData);
  };


  const clickIncHandler = () => {
    setCounter(counter + 1);
  };
  const clickDecHandler = () => {
    setCounter(counter - 1);
  };
  const clickResetHandler = () => {
    setCounter(0);
  };

  return (
    <>
      <Header />
      
      <Form
      changeFormHandler ={changeFormHandler}/>
      
      <View formData={inputValue}/>
      
      {/* <Counter
        counter={counter}
        clickIncHandler={clickIncHandler}
        clickDecHandler={clickDecHandler}
        clickResetHandler={clickResetHandler}
      />
      {persons.map((person) => (
        <Box
          key={person.id}
          name={person.name}
          title={person.title}
          location={person.location}
        />
      ))} */}

      <Footer />
    </>
  );
}

export default App;
