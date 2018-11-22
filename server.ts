import * as express from 'express';
import { join } from 'path';
import * as expressRedisCache from 'express-redis-cache';

const render = require('./render');

const cache = expressRedisCache({
  expire: 60 * 60 * 24 // One day
});

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

app.engine('html', (_, options, callback) => {
  render(options.req.url).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', cache.route(), express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', cache.route(), (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
