import React from 'react';
import { useState } from 'react';

const App = () => {

    const [ state, setState ] = useState();

    const handleClickPostButton = () => {
        const url = 'http://localhost:3005/'
        const options = {
            headers: { "Content-Type" : "application/json"},
            method: "POST"
        }
        fetch(url, options);
        console.log("POST button was clicked!");
    }

    const handleClickGetButton = () => {
        const url = 'http://localhost:3005/';
        fetch(url)
            .then(res => res.json())
            .then(x => setState(x))
        console.log("GET button was clicked!");
    }

    return (
        <div style={{"padding": "2rem"}}>
            <button 
                onClick={handleClickPostButton}
                style={{"margin": "2rem", "padding": "0.75rem"}}
            >
                POST
            </button>
            <button 
                onClick={handleClickGetButton}
                style={{"margin": "2rem", "padding": "0.75rem"}}
            >
                GET
            </button>
            <h3>{state}</h3>
        </div>
    )
}

export default App;