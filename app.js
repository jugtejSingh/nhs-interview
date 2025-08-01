// app.js
const express = require('express');
const app = express();
const PORT = 3000;
const scenarioRouter = require('./routes/scenario');


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/api/scenario', scenarioRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});