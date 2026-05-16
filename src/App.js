import logo from './logo.svg';
import './App.css';

function App() {
    let email = "mojemail@gmail.com"

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <div className="App">
            <h1>Hello. My email is {email}</h1>
            <input type="text" onChange={handleChange}/>

        </div>
    );
}

export default App;
