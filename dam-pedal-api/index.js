const express = require('express')
const app = express()
const port = 3001
const mysql = require('./db')


app.get('/api/tables', (req, res) => {
    let msg = ""
    mysql.pool.query('show tables;', (err, rows, fields) => {
        if(err){
            res.status(404)
            msg = "Could get tables"
        } else {
            res.status(200)
            msg = JSON.stringify(rows)
        }
        res.send(msg);
    })
});

app.listen(port, () => {console.log(`listening on ${port}`)})
