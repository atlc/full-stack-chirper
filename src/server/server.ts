import * as express from 'express';
import * as cors from 'cors';
import apiRouter from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
