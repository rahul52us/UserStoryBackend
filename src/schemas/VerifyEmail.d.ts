import mongoose, { Document } from 'mongoose';
export interface IVerifyEmailToken extends Document {
    userId: mongoose.Types.ObjectId;
    token: string;
    createdAt: Date;
}
declare const _default: mongoose.Model<IVerifyEmailToken, {}, {}, {}, mongoose.Document<unknown, {}, IVerifyEmailToken> & Omit<IVerifyEmailToken & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
