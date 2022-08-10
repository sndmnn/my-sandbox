import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export const uploadConfig = {
  driver: process.env.STORAGE_DRIVER || 'disk',
  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),
};

export default uploadConfig;
