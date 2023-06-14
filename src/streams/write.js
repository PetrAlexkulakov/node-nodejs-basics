import fs from 'fs';
import readline from 'readline';

const write = async () => {
    const ourPath = './src/streams/files/fileToWrite.txt';
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const writeStream = fs.createWriteStream(ourPath);

    rl.on('line', (input) => {
        writeStream.write(input + '\n');
    });
    
    rl.on('close', () => {
        writeStream.end();
    });
};

await write();