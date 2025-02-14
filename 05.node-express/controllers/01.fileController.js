import fs from 'fs';
import fs1 from 'fs/promises';

// Example: Asynchronously read a file
export const readFile1 = (req, res) => {
    fs.readFile('./controllers/file.txt', 'utf-8', (err, data)=> {
        if (err) {
            return res.status(500).json({ message: 'Error reading file', error: err });
        }
        res.status(200).json({ message: 'File content read successfully', data });
    });
};

// Example: Write data to a file
export const writeFile = (req, res) => {
    fs.writeFile('./controllers/file.txt', 'This is new content!', (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error writing file', error: err });
        }
        res.status(200).json({ message: 'File written successfully!' });
    });
};

// Example: Using async/await with promises
export const appendFile = async (req, res) => {
    try {
        await fs1.appendFile('./controllers/file.txt', '\nAppended content via fs.promises!');
        res.status(200).json({ message: 'Data appended successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error appending file', error: err });
    }
};

// Output
// {
//   "message": "File content read successfully",
//   "data": "This is the content of the file."
// }
//
// {
//   "message": "File written successfully!"
// }
//
// {
//   "message": "Data appended successfully!"
// }
//