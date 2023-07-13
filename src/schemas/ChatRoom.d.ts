import mongoose, { Document } from "mongoose";
interface IReaction extends Document {
    user_id: mongoose.Schema.Types.ObjectId;
    emoji: string;
}
interface IThread extends Document {
    user_id: mongoose.Schema.Types.ObjectId;
    content: string;
    created_at: Date;
}
export interface IMessage extends Document {
    room_id: mongoose.Schema.Types.ObjectId;
    user_id: mongoose.Schema.Types.ObjectId;
    content: string;
    created_at: Date;
    read_by: mongoose.Schema.Types.ObjectId[];
    reactions: IReaction[];
    threads: IThread[];
}
export interface IChatRoom extends Document {
    name: string;
    members: mongoose.Schema.Types.ObjectId[];
    created_by: mongoose.Schema.Types.ObjectId;
    created_at: Date;
    messages: IMessage[];
}
export declare const ChatRoom: mongoose.Model<IChatRoom, {}, {}, {}, mongoose.Document<unknown, {}, IChatRoom> & Omit<IChatRoom & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export declare const chatMessage: mongoose.Model<IMessage, {}, {}, {}, mongoose.Document<unknown, {}, IMessage> & Omit<IMessage & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export {};
