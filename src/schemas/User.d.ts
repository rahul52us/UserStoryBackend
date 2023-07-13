import mongoose, { Schema, Document } from "mongoose";
export interface UserInterface extends Document {
    name: string;
    username: string;
    pic: string;
    position?: string[];
    company: Schema.Types.ObjectId;
    profile_details: Schema.Types.ObjectId;
    is_active: boolean;
    role: string;
    password: string;
}
declare const UserModel: mongoose.Model<UserInterface, {}, {}, {}, mongoose.Document<unknown, {}, UserInterface> & Omit<UserInterface & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default UserModel;
