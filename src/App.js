import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState("mojemail@gmail.com");
    const [login, setLogin] = useState(true);

    function handleChange(event) {
        setEmail(event.target.value);
    }


    // let login = true;
    // let iAmIn = false;

    let komunikat = "";

    function pop() {
        alert(email);
        // iAmIn = true;
        setLogin(false)

    }

    function logout() {
        // iAmIn = false;
        setEmail("");
        setLogin(true);
    }

    if (email.length <= 4) {
        komunikat = "Twój adres jest za krótki";
    }
    if (email.length > 4 && email.length <= 10) {
        komunikat = "Twój adres jest ok";

    }
    if (email.length >= 10) {
        komunikat = "Twój adres jest za długi";
    }


    return (
        <div className="App">

            {login && <div>
                <h1>Hello. My email is {email}</h1>
                <div>{komunikat}</div>
                <input type="text" value={email} onChange={handleChange}/>
                <button onClick={pop}>Zaloguj</button>
            </div>}

            {!login && <div>
                Hi {email}!
                <button onClick={logout}>Wyloguj</button>


            </div>}

        </div>
    );
}

export default App;
