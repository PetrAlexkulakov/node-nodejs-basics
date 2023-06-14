import fs from 'fs';

const read = async () => {
    const ourPath = './src/fs/files/fileToRead.txt';
  
    if (!fs.existsSync(ourPath)) {
      throw new Error('FS operation failed');
    }

    console.log(fs.readFileSync(ourPath, 'utf8'));
};

await read();