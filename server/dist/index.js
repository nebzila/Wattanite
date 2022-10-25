"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Vote_1 = __importDefault(require("./routes/Vote"));
const Api_1 = __importDefault(require("./routes/Api"));
const PORT = 3002;
const app = (0, express_1.default)();
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app);
const socketIO = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
socketIO.on('connection', (socket) => {
    console.log(`${socket.id} user  connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/vote', Vote_1.default);
app.use('/api', Api_1.default);
server.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}/`);
});
