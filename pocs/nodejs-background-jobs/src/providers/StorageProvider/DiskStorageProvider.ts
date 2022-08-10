import { rename, unlink } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

import { uploadConfig } from '../../config/upload';
import StorageProvider from './StorageProvider';

class DiskStorageProvider implements StorageProvider {
  constructor() {
    if (!existsSync(uploadConfig.uploadsFolder))
      mkdirSync(uploadConfig.uploadsFolder);
  }

  public async saveFile(file: string): Promise<string> {
    const uploadedFilePath = resolve(uploadConfig.tmpFolder, file);
    const newFilePath = resolve(uploadConfig.uploadsFolder, file);

    await rename(uploadedFilePath, newFilePath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = resolve(uploadConfig.uploadsFolder, file);

    if (!existsSync(filePath)) return;

    await unlink(filePath);
  }
}

export default DiskStorageProvider;
