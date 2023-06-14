import express, {Express, Request, Response} from 'express'

const port = 8000;
const app = express();

// const server = require('http').Server(app);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from express with ts");
})
app.get('/hi', (req, res) => {
    res.send("Hii there");
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})

// server.listen(3030);