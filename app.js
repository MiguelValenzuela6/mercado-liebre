const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Servidor OK:${port}`);
});

app.get("/", (req, res) =>{
    let htmlPath = path.join(__dirname, "./src/views/index.html");
    res.sendFile(htmlPath);
});

app.get("/registro", (req, res) =>{
    res.sendFile(path.join(__dirname, "./src/views/registro.html"))
});