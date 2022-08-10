interface StorageProvider {
  /**
   * Saves a file to the storage.
   *
   * @param path path of the file to be saved.
   */
  saveFile(path: string): Promise<string>;

  /**
   * Deletes a file from the storage.
   *
   * @param path path of the file to be deleted.
   */
  deleteFile(path: string): Promise<void>;
}

export default StorageProvider;
