import 'dotenv/config';
import express, { json } from 'express';
import winston from 'winston';
import redactSensitive from './formats/redactSensitive';
import consoleTransport from './transports/Console';
import mongoDbTransport from './transports/MongoDB';

const app = express();

app.use(json());

const logger = winston.createLogger({
  format: winston.format.combine(
    redactSensitive({
      redactKeys: ['password', '*.password'],
    }),
    winston.format.metadata(),
    winston.format.timestamp(),
  ),
  exitOnError: false,
  transports: [mongoDbTransport],
});

if (process.env.NODE_ENV !== 'production') logger.add(consoleTransport);

app.post('/', (req, res) => {
  const message = req.body;

  /* OBS: Calling `logger.info` with an object as the first argument
   * will spread the object's properties into the `infoObject`.
   *
   * This is normal behavior. If it's not desired, use `format.metadata()`
   * and the second argument of `logger.info` will be inserted into the
   * `infoObject` as `metadata`.
   */
  // logger.info('asdf', message);

  logger.info('asdf', { metadata: message });

  return res.sendStatus(200);
});

app.listen(3333, () => console.log('Server started on port 3333'));
