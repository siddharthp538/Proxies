const express = require('express');
const app = express();

app.listen(3000 , function () {
        return console.log('Listening to Port 3000.');
});

app.get('/hello' , (req , res) => {
    console.log(req.headers);
    res.send('Hello');
});