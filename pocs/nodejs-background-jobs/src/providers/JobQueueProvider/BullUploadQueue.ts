import { Queue as BullQueue, Job, Worker } from 'bullmq';
import IORedis from 'ioredis';
import { container, inject, injectable } from 'tsyringe';
import UploadFileService from '../../services/UploadFileService';
import StorageProvider from '../StorageProvider/StorageProvider';
import JobQueue from './JobQueue';

interface QueueJobData {
  file: Express.Multer.File;
}

@injectable()
export default class BullUploadsQueue implements JobQueue<QueueJobData> {
  private queue: BullQueue;
  private worker: Worker;
  private redisConnection: IORedis;
  private storageProvider: StorageProvider;

  constructor(
    @inject('StorageProvider')
    storageProvider: StorageProvider
  ) {
    this.storageProvider = storageProvider;

    this.redisConnection = new IORedis({
      port: 6379,
      maxRetriesPerRequest: null,
    });

    this.queue = new BullQueue<QueueJobData>('uploads', {
      connection: this.redisConnection,
    });

    this.worker = new Worker(
      'uploads',
      async (job: Job<QueueJobData>) => {
        const service = container.resolve(UploadFileService);
        const fileUrl = await service.execute({
          fileName: job.data.file.filename,
        });

        return fileUrl;
      },
      {
        connection: this.redisConnection,
      }
    );
  }

  add(data: QueueJobData): void {
    const timestamp = new Date().getTime();
    const jobName = `${timestamp}-${data.file.filename}`;

    this.queue.add(jobName, data);
  }
}
