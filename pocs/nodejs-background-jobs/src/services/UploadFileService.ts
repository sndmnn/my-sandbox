import { inject, injectable } from 'tsyringe';
import StorageProvider from '../providers/StorageProvider/StorageProvider';
import Service from './Service';

type ServiceParams = {
  fileName: string;
};

@injectable()
export default class UploadFileService
  implements Service<ServiceParams, string>
{
  private diskStorageProvider: StorageProvider;

  constructor(
    @inject('StorageProvider')
    diskStorageProvider: StorageProvider
  ) {
    this.diskStorageProvider = diskStorageProvider;
  }

  async execute({ fileName }: ServiceParams): Promise<string> {
    const fileUrl = await this.diskStorageProvider.saveFile(fileName);

    return fileUrl;
  }
}
