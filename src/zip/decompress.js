import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const filePath = './src/zip/files/fileToCompress.txt';
    const archivePath = './src/zip/archive.gz';

    const readStream = fs.createReadStream(archivePath);
    const writeStream = fs.createWriteStream(filePath);
    readStream.pipe(zlib.createGunzip()).pipe(writeStream);
  
    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });
};

await decompress();