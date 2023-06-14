import fs from 'fs';

const rename = async () => {
    const oldPath = './src/fs/files/wrongFilename.txt';
    const newPath = './src/fs/files/properFilename.md';
  
    if (!fs.existsSync(oldPath)) {
      throw new Error('FS operation failed');
    }
  
    if (fs.existsSync(newPath)) {
      throw new Error('FS operation failed');
    }

    fs.renameSync(oldPath, newPath);
};

await rename();