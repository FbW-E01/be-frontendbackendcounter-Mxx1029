import React from 'react';
import { useState } from 'react';

const App = () => {

    const [ state, setState ] = useState();

    const handleClickPostButton = () => {
        // tries to fetch (post sth. but has no data) from our backend (server is running at port 3005)
        const url = 'http://localhost:3005/'
        const options = {
            headers: { "Content-Type" : "application/json"},
            method: "POST"
        }
        fetch(url, options);
        console.log("POST button was clicked!");
        // Joel's version:
        // const init = { method: "POST" }
        // fetch('http://localhost:3005/', init)
        //     .then(result => result.text())
        //     .then(text => console.log(text))
        //     .catch(error => console.error(error))
    }

    const handleClickGetButton = () => {
        // tries to fetch (get data) from our backend (server is running at port 3005)
        const url = 'http://localhost:3005/';
        fetch(url)
            .then(res => res.json())
            .then(x => setState(x))
        console.log("GET button was clicked!");
        // Joel's version:
        // fetch('http://localhost:3005/')
        //     .then(result => result.text())
        //     .then(text => console.log(text))
        //     .catch(error => console.error(error))
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