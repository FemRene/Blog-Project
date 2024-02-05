const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "hosting.femrene.de",
    user: 'BVB-Blog',
    password: 'UM[_gQx02ZCTeG9e',
    database: 'BVB-Blog'
})

app.get('/', (req,res)=>{
    return res.json("This is the backend");
})

app.get('/posts', (req, res)=> {
    const sql = "SELECT * FROM Posts";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("mysql Connected");
})

//femrene.de
//BVB-Blog
//UM[_gQx02ZCTeG9e