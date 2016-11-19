import path from 'path';
import browserify  from 'browserify';
import browserifyInc  from 'browserify-incremental';
import sassMiddleware from 'node-sass-middleware';
import bourbon from 'node-bourbon';

const rootPath = path.join(__dirname, '../../');



export function serveClientJs(req, res) {
  // browserify incremental cache file
  const bIncCacheFile = path.join(rootPath, 'tmp/browserify-inc-cache.json');
  // client javascript entry point file
  const jsEntryFile = path.join(rootPath, 'client/index.js');
  const bOpts = {
    ...browserifyInc.args,
    debug: true,
    insertGlobals: true,
    transform: ['babelify'],
    extensions: ['.js', '.jsx'],
  };
  const b = browserify(jsEntryFile, bOpts);
  // use b-inc
  browserifyInc(b, {cacheFile: bIncCacheFile});
  // send the browserified output as response
  res.type('application/javascript');
  b.bundle().pipe(res);
};



const cachedSassMiddleware = sassMiddleware({
  src: path.join(rootPath, 'stylesheets'),
  includePaths: bourbon.includePaths,
  response: true,
  force: true,
});

export function serveCss(req, res, next) {
  const hackedReq = {...req, url: '/index.css'};
  return cachedSassMiddleware(hackedReq, res, next);
};
