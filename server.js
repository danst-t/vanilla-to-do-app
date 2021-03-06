

const express = require('express');
const app = express();
const path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'front-end')));

app.listen(3500);
