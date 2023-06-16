import { Worker, isMainThread } from 'worker_threads';
import cpu from 'os';

const performCalculations = async () => {
  const cpuCount = cpu.cpus().length;
  const results = [];

  const createWorker = (workerNumber) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker('./src/wt/worker.js', { workerData: workerNumber });

      worker.on('message', (result) => {
        resolve({ status: 'resolved', data: result });
      });

      worker.on('error', (error) => {
        resolve({ status: 'error', data: null });
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          resolve({ status: 'error', data: null });
        }
      });
    });
  };

  const runWorkers = async () => {
    const workerPromises = [];
    for (let i = 0; i < cpuCount; i++) {
      const workerNumber = 10 + i;
      workerPromises.push(createWorker(workerNumber));
    }
    return await Promise.all(workerPromises);
  };

  if (isMainThread) {
    const results = await runWorkers();
    console.log(results);
  }
};

await performCalculations();