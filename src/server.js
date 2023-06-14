// import express, {Express, Request, Response} from 'express'
const express = require('express')

const port = 8000;
const app = express();

// const server = require('http').Server(app);

app.get('/health-check', (req, res) => {
    res.sendStatus(200);
})

app.get('/hi', (req, res) => {
    res.send("Hii there");
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})

// server.listen(3030);