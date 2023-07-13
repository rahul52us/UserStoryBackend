"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatMessage = exports.ChatRoom = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const reactionSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    emoji: { type: String, required: true },
});
const threadSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
const messageSchema = new mongoose_1.Schema({
    room_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "ChatRoom" },
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    read_by: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    reactions: [reactionSchema],
    threads: [threadSchema],
});
const chatRoomSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    members: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    created_by: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    created_at: { type: Date, default: Date.now },
    messages: [messageSchema],
});
exports.ChatRoom = mongoose_1.default.model("ChatRoom", chatRoomSchema);
exports.chatMessage = mongoose_1.default.model("ChatMessage", messageSchema);
//# sourceMappingURL=ChatRoom.js.map