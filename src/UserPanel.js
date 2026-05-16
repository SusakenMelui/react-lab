import {useState} from "react";

export default function UserPanel(prep) {

    return (

        <div className="container">
            Hi {prep.email}!
            <button onClick={prep.logout}>Wyloguj</button>


        </div>
    )
}