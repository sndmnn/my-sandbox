import { transports, format } from 'winston';

const consoleTransport = new transports.Console({
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.prettyPrint({
      depth: 5,
      colorize: true,
    }),
  ),
});

export default consoleTransport;
