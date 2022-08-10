import { container } from 'tsyringe';
import DiskStorageProvider from '../providers/StorageProvider/DiskStorageProvider';
import S3StorageProvider from '../providers/StorageProvider/S3StorageProvider';
import StorageProvider from '../providers/StorageProvider/StorageProvider';

export default function registerProviders() {
  container.register<StorageProvider>('StorageProvider', {
    useClass: S3StorageProvider,
  });
}
