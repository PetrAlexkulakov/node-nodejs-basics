import fs from 'fs';

const list = async () => {
    const ourPath = './src/fs/files';
  
    if (!fs.existsSync(ourPath)) {
      throw new Error('FS operation failed');
    }

    const files = fs.readdirSync(ourPath);

    console.log(files);
};

await list();