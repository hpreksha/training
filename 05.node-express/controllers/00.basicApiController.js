// controllers/basicApiController.js

let obj = [{
  id: 1,
  name: 'John Doe',
}];

// GET request handler
export const getData = (req, res) => {
  res.status(200).json({ length: obj.length, message: "Success", data: obj });
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

