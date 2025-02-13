import { createServer } from 'http';
const PORT = process.env.PORT;
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const logger2 = (req, res) => {
    console.log(`logger2 ${req.method} ${req.url}`);
}

const server = createServer((req, res) => {
    if(req.url ==='/') {
        console.log('If condition');
    }
    logger(req, res, () => {
        logger2(req, res, ()=> {
            console.log('This is the next function');
        })
    })
    console.log("After middleware logic.");
    res.end();
});

server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    
});