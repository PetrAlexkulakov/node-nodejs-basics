import { Transform } from 'stream';
import readline from 'readline';

const transform = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const reverseTransform = new Transform({
        transform(chunk) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            this.push(reversedChunk);
        },
    });
    
    rl.on('line', (input) => {
        reverseTransform.write(input + '\n');
    });

    rl.on('close', () => {
        reverseTransform.end();
    });

    reverseTransform.pipe(process.stdout);
};

await transform();