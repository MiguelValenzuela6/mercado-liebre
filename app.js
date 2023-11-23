const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor OK: http://localhost:3000');
});

app.get("/", (req, res) =>{
    let htmlPath = path.join(__dirname, "./src/views/index.html");
    res.sendFile(htmlPath);
});

app.get("/registro", (req, res) =>{
    res.sendFile(path.join(__dirname, "./src/views/registro.html"))
});