import fs from 'fs';
import path from 'path';

const create = async () => {
    const filePath = './src/fs/files/fresh.txt';

    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    fs.writeFileSync(filePath, 'I am fresh and young');
};

await create();
