import { EventEmitter } from 'events';

const emitter = new EventEmitter();

// Asynchronous event listener
emitter.on('fetchData', async () => {
  const data = await fetchDataFromAPI();
  console.log(data);
});

// emitter.emit('fetchData');

// Example of async function
async function fetchDataFromAPI() {
  return new Promise(resolve => setTimeout(() => resolve('Data from API'), 1000));
}
export default emitter;