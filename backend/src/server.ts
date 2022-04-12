import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ErrorRequestHandler } from 'express';
import 'dotenv/config';
import { fixBoron } from './utils/fixBoron';

const app = express();
app.use(bodyParser.json());

const port = 4000;

// CORS Protocol
app.use(
    cors({
        origin: `${process.env.CLIENT_ORIGIN}`,
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        credentials: true,
    }),
);

// Routes
app.get('/api/elements', (req, res) => {
    axios.get(process.env.API_URL || '').then((response) => {
        fixBoron(response.data);
        res.send(response.data);
    });
});

app.use(((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
}) as ErrorRequestHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
