import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const filePath = './src/hash/files/fileToCalculateHashFor.txt';

    const data = fs.readFileSync(filePath);
    const hash = crypto.createHash('sha256');

    hash.update(data);
    const hashHex = hash.digest('hex');

    console.log(hashHex);
};

await calculateHash();