const express = require('express');
const app = express();
const db = require('./db');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    });
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});