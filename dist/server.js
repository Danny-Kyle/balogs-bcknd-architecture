"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 8000;
const app = (0, express_1.default)();
// const server = require('http').Server(app);
app.get('/', (req, res) => {
    res.send("Hello from express with ts");
});
app.get('/hi', (req, res) => {
    res.send("Hii there");
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
// server.listen(3030);
