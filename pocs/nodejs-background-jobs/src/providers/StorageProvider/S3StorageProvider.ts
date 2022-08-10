import fs from 'fs';
import path from 'path';
import { S3 } from 'aws-sdk';
import uploadConfig from '../../config/upload';
import { AWS_REGION, AWS_S3_BUCKET } from '../../config/aws';
import StorageProvider from './StorageProvider';

class S3StorageProvider implements StorageProvider {
  private client: S3;
  private bucket: string;

  constructor() {
    this.client = new S3({
      region: AWS_REGION,
    });

    if (!AWS_S3_BUCKET && process.env.UPLOAD_DRIVER === 's3') {
      throw new Error('AWS_S3_BUCKET must be defined in the environment');
    }

    this.bucket = AWS_S3_BUCKET as string;
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, file);
    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .putObject({
        Bucket: this.bucket,
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentDisposition: `inline; filename=${file}`,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    return `https://${this.bucket}.s3.amazonaws.com/${file}`;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: this.bucket,
        Key: file,
      })
      .promise();
  }
}

export default S3StorageProvider;
