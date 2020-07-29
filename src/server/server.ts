import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as compression from 'compression';
import apiRouter from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRouter);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
