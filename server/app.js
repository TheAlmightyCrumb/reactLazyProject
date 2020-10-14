const express = require('express');
const comments = require('./routes/comments');

const app = express();

const unknownEndpoint = (request, response) => {
    response.status(404).json({ message: 'Unknown Endpoint' })
}

app.use(express.json());
app.use('/comments', comments);
app.use(unknownEndpoint);

module.exports = app;