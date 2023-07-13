import { Server } from "socket.io";
import http from "http";

const setupSocket = (server: http.Server) => {
  let connectedUsers = []
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected");
    console.log(socket.id);
    connectedUsers.push(socket.id)

    socket.on("message", (data) => {
      // Handle message event
      // ...
      socket.broadcast.emit('recieved_message',data)
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

export { setupSocket };
