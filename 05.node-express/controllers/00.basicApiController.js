// controllers/basicApiController.js
// import dotenv from 'dotenv';
import { Worker } from 'worker_threads';
const port = process.env.PORT;

let obj = [{
  id: 1,
  name: 'John Doe',
}];
console.log(port);
// GET request handler
export const getData = (req, res) => {
  const worker = new Worker("./worker.js")
  console.log(2);
  worker.on('message', (message) => {
  console.log(3);

    if (message === 'done') {
      res.status(200).json({ length: obj.length, message: "Success", data: obj });
    }
  });

  worker.on('error', (error) => {
    console.log(error);
    res.status(500).json({ message: "Error", error });
  });

  worker.on('exit', (code) => {
    if (code !== 0) {
      res.status(500).json({ message: `Worker stopped with exit code ${code}` });
    }
  });

  worker.postMessage('start');
  // res.status(200).json({ length: obj.length, message: "Success", data: obj });
};

// POST request handler
export const createData = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newObj = {
    id: obj.length + 1,
    name
  }
  obj.push(newObj);
  res.status(201).json({ message: "Created", data: newObj });
};


// Output
// {
//   "length": 1,
//   "message": "Success",
//   "data": [
//     {
//       "id": 1,
//       "name": "John Doe"
//     }
//   ]
// }



// {
//   "message": "Created",
//   "data": {
//     "id": 2,
//     "name": "Jane Doe"
//   }
// }

