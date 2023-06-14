import fs from 'fs';

const read = async () => {
    const ourPath = './src/streams/files/fileToRead.txt';
    
    const readStream = fs.createReadStream(ourPath);

    readStream.on('data', (chunk) => {
        console.log(chunk.toString())
    })
};

await read();