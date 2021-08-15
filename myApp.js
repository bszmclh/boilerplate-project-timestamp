import express from 'express';

let app = express();

app.get('/api/:date', (req, res) => {
    let date = req.params.date;
    res.json({ test: date })
})