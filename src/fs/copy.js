import fs from 'fs';
import path from 'path';

const copy = async () => {
  const sourceFolderPath = './src/fs/files';
  const destinationFolderPath = './src/fs/files_copy';

  if (!fs.existsSync(sourceFolderPath)) {
    throw new Error('FS operation failed');
  }

  if (fs.existsSync(destinationFolderPath)) {
    throw new Error('FS operation failed');
  }

  fs.mkdirSync(destinationFolderPath);

  const files = fs.readdirSync(sourceFolderPath);

  files.forEach((file) => {
    const sourceFilePath = path.join(sourceFolderPath, file);
    const destinationFilePath = path.join(destinationFolderPath, file);

    fs.copyFileSync(sourceFilePath, destinationFilePath);
  });
};

await copy();//try it
