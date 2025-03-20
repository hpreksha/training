import { parentPort } from 'worker_threads';
parentPort.on('message', () => {
    console.log(1);
  for (let i = 0; i < 20_000_000_000; i++) {}
  parentPort.postMessage('done');
});