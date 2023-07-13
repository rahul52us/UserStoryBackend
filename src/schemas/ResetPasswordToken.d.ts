import mongoose, { Document } from 'mongoose';
export interface IResetToken extends Document {
    userId: mongoose.Types.ObjectId;
    token: string;
    createdAt: Date;
}
declare const ResetToken: mongoose.Model<IResetToken, {}, {}, {}, mongoose.Document<unknown, {}, IResetToken> & Omit<IResetToken & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default ResetToken;
