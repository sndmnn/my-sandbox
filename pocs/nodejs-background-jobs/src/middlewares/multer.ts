import multer from 'multer';
import { randomBytes } from 'crypto';
import fs from 'fs';
import uploadConfig from '../config/upload';

const { tmpFolder } = uploadConfig;

export default multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (!fs.existsSync(tmpFolder)) fs.mkdirSync(tmpFolder);

      cb(null, tmpFolder);
    },
    filename(_, file, callback) {
      const fileHash = randomBytes(10).toString('hex');
      const treatedFileName = file.originalname.replace(' ', '-');
      const fileName = `${fileHash}-${treatedFileName}`;

      return callback(null, fileName);
    },
  }),
});
