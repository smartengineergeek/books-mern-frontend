const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const bookRouter = require('./books/routes/book-router');

const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
db.on('error', console.error.bind(console, 'MongoDB connection error'));
app.get('/',(req, res) => {
	res.send('healthCheck 200 OK');
});
app.use('/api', bookRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));