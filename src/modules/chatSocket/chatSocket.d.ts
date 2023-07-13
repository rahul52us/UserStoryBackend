import { Server } from "socket.io";
import http from "http";
declare const setupSocket: (server: http.Server) => void;
export { setupSocket };
