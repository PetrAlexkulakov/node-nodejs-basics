import { fork } from 'child_process'

const spawnChildProcess = async (args) => {
    const childProcess = fork('./src/cp/files/script.js', args, {
        stdio: [process.stdin, process.stdout, 'ipc']
    });
};

spawnChildProcess(  ['someArgument1', 'someArgument2'] );
// './src/cp/files/script.js'