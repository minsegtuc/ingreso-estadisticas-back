import express from 'express';
import indexRoutes from './routes/index.routes.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 3001;

const corsOptions = {
    origin: 'https://inscripciones.minsegtuc.gov.ar',
    //origin: 'http://192.168.1.8:5173/controldegestion/examenes/',
    methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan('dev'));
app.use(indexRoutes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});