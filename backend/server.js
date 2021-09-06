import express from 'express';
import cors from 'cors';

let counter = 0;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`${counter}`);
});

app.post('/', (req, res) => {
    counter++;
    console.log(`${counter}`);
    // res.send(`${counter}`);
});

app.listen(3005, () => console.log("Server started on http://localhost:3005"))