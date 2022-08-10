import 'reflect-metadata';
import 'dotenv/config';
import './container';
import express from 'express';
import multer from './middlewares/multer';
import BullUploadsQueue from './providers/JobQueueProvider/BullUploadQueue';
import { container } from 'tsyringe';
import UploadFileService from './services/UploadFileService';

const app = express();

app.get('/', (_, res) => res.status(200).send('Server is running'));

app.post('/upload', multer.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).send('Missing file');

  const bullQueue = container.resolve(BullUploadsQueue);

  bullQueue.add({
    file: req.file,
  });

  return res.sendStatus(200);
});

app.listen(3333, () => console.log('::Server is running on port 3333'));
