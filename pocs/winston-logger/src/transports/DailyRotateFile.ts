import 'winston-daily-rotate-file';
import { transports } from 'winston';
import { LOG_FOLDER } from '../config/logs';

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${LOG_FOLDER}/daily-rotate/%DATE%-logs.log`,
  datePattern: 'YYYY-MM-DD',
  frequency: '24h',
  zippedArchive: true,
  maxFiles: '30d',
});

export default dailyRotateFileTransport;
