import express from 'express';
import { renderToNodeStream } from 'react-dom/server';
// import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import fs from 'fs';
import App from '../src/App.jsx';

const PORT = 3000;

const html = fs.readFileSync('dist/frontend/index.html').toString();

/* Using "not rendered" as a delimiter to `split()` is generally not a good
 * idea. But it's fine for this example.
 */
const parts = html.split('not rendered');

const app = express();

app.use('/frontend', express.static('dist/frontend'));
app.use((req, res) => {
  const reactMarkup = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  // res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  // res.end();

  res.write(parts[0]);

  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write(parts[1]);
    res.end();
  });
});

app.listen(PORT, () => console.log(`::Listening on http://localhost:${PORT}`));
