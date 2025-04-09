const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello im pravalika this is my Jenkins-CI/CD Task-2'));
app.listen(3000, () => console.log('App running on port 3000'));
