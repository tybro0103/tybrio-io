import express from 'express';
import path from 'path';
import compression from 'compression';
import { createEngine } from 'express-react-views';

import { handleNotFound, handleError } from './middlewares/errors';
import appRouter from './routers/app';
import adminRouter from './routers/admin';

const rootPath = path.join(__dirname, '../');
const app = express();

// no powered by
app.disable('x-powered-by');

// view rendering engine
app.set('views', path.join(rootPath, 'server/components'));
app.set('view engine', 'jsx');
app.engine('jsx', createEngine({transformViews: false}));

// middleware
app.use(compression());
app.use(express.static(path.join(rootPath, 'public')));

// routers
app.use('/', appRouter);
app.use('/admin', adminRouter);

// errors
app.use(handleNotFound);
app.use(handleError);

export default app;
