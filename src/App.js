import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState("mojemail@gmail.com");

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div className="App">

            <h1>Hello. My email is {email}</h1>
            <input type="text" value = {email} onChange={handleChange}/>

        </div>
    );
}

export default App;
