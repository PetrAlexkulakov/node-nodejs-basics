import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const inputFilePath = './src/zip/files/fileToCompress.txt';
    const outputFilePath = './src/zip/archive.gz';

    const readableStream = fs.createReadStream(inputFilePath);
    const writableStream = fs.createWriteStream(outputFilePath);

    const gzipStream = zlib.createGzip();

    readableStream.pipe(gzipStream).pipe(writableStream);

    await new Promise((resolve, reject) => {
        writableStream.on('finish', resolve);
        writableStream.on('error', reject);
    });
};

await compress();