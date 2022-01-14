const express = require('express');

const app = express();

app.get('/', (_, res) => res.status(200).send('Hello World!'));

const PORT = process.env.PORT || 3333;

app.listen(3333, () => console.log(`::Server started on port ${PORT}`));
