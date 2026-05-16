import {useState} from "react";
import MeetingsPage from "./meetings/MeetingsPage";

export default function UserPanel({username, logout}) {

    return (

        <div className="container">
            Hi {username}!
            <button onClick={logout}>Wyloguj</button>
            <MeetingsPage username = {username}/>


        </div>
    )
}