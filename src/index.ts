import express from 'express';

// THIS IS MY EXPRESS SERVER

const app = express();

app.use(express.static('public'));

app.listen(3000, () => console.log('hello'))