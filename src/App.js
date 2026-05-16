import logo from './logo.svg';
import './App.css';
import "milligram";
import LoginForm from "./LoginForm";

import {useState} from "react";

function App() {
    const [email, setEmail] = useState("mojemail@gmail.com");
    const [loginScreen, setLoginScreen] = useState(true);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleLogin(email){
        setEmail(email);
        setLoginScreen(false);
    }


    // let login = true;
    // let iAmIn = false;

    let komunikat = "";

    function pop() {
        alert(email);
        // iAmIn = true;
        setLoginScreen(false)

    }

    function logout() {
        // iAmIn = false;
        setEmail("Twój email");
        setLoginScreen(true);
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

            {loginScreen && <div className="container">
                <LoginForm onLogin={handleLogin}/>
            </div>}

            {!loginScreen && <div className="container">
                Hi {email}!

                <button onClick={logout}>Wyloguj</button>


            </div>}

        </div>
    );
}

export default App;
