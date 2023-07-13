"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocket = void 0;
const socket_io_1 = require("socket.io");
const setupSocket = (server) => {
    let connectedUsers = [];
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
        },
    });
    io.on("connection", (socket) => {
        console.log("User connected");
        console.log(socket.id);
        connectedUsers.push(socket.id);
        socket.on("message", (data) => {
            // Handle message event
            // ...
            socket.broadcast.emit('recieved_message', data);
        });
        socket.on("joinRoom", (room_id) => {
            // Handle joinRoom event
            // ...
        });
        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
};
exports.setupSocket = setupSocket;
//# sourceMappingURL=chatSocket.js.map