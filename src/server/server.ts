import * as express from 'express';
import * as path from 'path';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as compression from 'compression';
import apiRouter from './routes';
import logger from './config/logs';

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(logger);
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRouter);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html'))); // Serve up homepage as default when unknown routes are hit

// const globalErrorHandler = (e) => console.log(e)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
