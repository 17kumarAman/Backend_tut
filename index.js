const express = require("express");
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading file');
        return;
      }
  
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseErr) {
        console.error(parseErr);
        res.status(500).send('Error parsing JSON');
      }
    });
  });

app.get("/twitter", (req, res) => {
  res.send("hiteshdotcom");
});

app.get("/login", (req, res) => {
  res.send(`<h1>Login Please</h1>`);
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
  console.log('object')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
