import logo from './logo.svg';
import './App.css';
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

import {useState} from "react";

function App() {
    // const [email, setEmail] = useState("mojemail@gmail.com");
    // const [loginScreen, setLoginScreen] = useState(true);
    const [loggedInUsername, setLoggedInUsername] = useState(null);
    //
    // function handleChange(event) {
    //     setEmail(event.target.value);
    // }
    //
    // function handleLogin(email){
    //     setEmail(email);
    //     setLoginScreen(false);
    // }


    // let komunikat = "";
    //
    // function pop() {
    //     alert(email);
    //     // iAmIn = true;
    //     setLoginScreen(false)
    //
    // }
    //
    // function logout() {
    //     // iAmIn = false;
    //     setEmail("Twój email");
    //     setLoginScreen(true);
    // }
    //
    // if (email.length <= 4) {
    //     komunikat = "Twój adres jest za krótki";
    // }
    // if (email.length > 4 && email.length <= 10) {
    //     komunikat = "Twój adres jest ok";
    //
    // }
    // if (email.length >= 10) {
    //     komunikat = "Twój adres jest za długi";
    // }


    return (
        <div className="App">

            <h1>System do zapisów na zajęcia</h1>
            {
                loggedInUsername ?
                    <UserPanel email={loggedInUsername} logout={() => setLoggedInUsername(null)}/>
                    :
                    <LoginForm onLogin={(email) => setLoggedInUsername(email)}/>

}


</div>
)
    ;
}

export default App;
