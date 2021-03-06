import express from 'express';
import path from 'path';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import { createEngine } from 'express-react-views';

import env from '../env';
import { handleNotFound, handleError } from './middlewares/errors';
import { serveCss } from './middlewares/dev-assets';
import appRouter from './routers/app';
import oauthRouter from './routers/oauth';
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cookieSession({name: 'tybro-io', secret: env.cookieSessionSecret}));
app.use(compression());
app.use(express.static(path.join(rootPath, 'public')));

// assets
app.get('/main-dev.css', serveCss);

// set current user
app.use((req, res, next) => {
  res.locals.igUser = req.session.igUser; 
  next();
});

// routers
app.use('/', appRouter);
app.use('/oauth', oauthRouter);
app.use('/admin', adminRouter);

// errors
app.use(handleNotFound);
app.use(handleError);

export default app;
