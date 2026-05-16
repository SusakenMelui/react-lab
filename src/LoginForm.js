import {useState} from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');

    return <div className= "container">
        <label>Zaloguj się e-mailem</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" onClick={() => props.onLogin(email)}>
            Wchodzę
        </button>
    </div>;

    //
    // <h1>Hello. My email is {email}</h1>
    // <div>{komunikat}</div>
    // <input type="text" value={email} onChange={handleChange}/>
    // <button onClick={pop}>Zaloguj</button>
}