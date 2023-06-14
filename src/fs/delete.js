import fs from 'fs';

const remove = async () => {
    const ourPath = './src/fs/files/fileToRemove.txt';
  
    if (!fs.existsSync(ourPath)) {
      throw new Error('FS operation failed');
    }

    fs.unlinkSync(ourPath);
};

await remove();