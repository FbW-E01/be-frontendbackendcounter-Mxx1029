import express from 'express';
import cors from 'cors';

let counter = 0;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`${counter}`);
    // Joel's version:
    // will be visible in console tab in frontend browser
    // res.send("Hi from the backend");
    // res.send(counter.toString());
});

app.post('/', (req, res) => {
    counter++;
    console.log(`${counter}`);
    // res.send(`${counter}`);
    // Joel's version:
    // will be visible in console tab in frontend browser
    // res.send("Hi from the backend")
    // counter++;
    // res.send(counter.toString());
});

app.listen(3005, () => console.log("Server started on http://localhost:3005"))