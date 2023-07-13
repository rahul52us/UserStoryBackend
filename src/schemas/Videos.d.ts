import mongoose, { Document } from "mongoose";
interface VideoI extends Document {
    title?: string;
    company: mongoose.Schema.Types.ObjectId;
    createdBy: mongoose.Schema.Types.ObjectId;
    description?: string;
    videoLink?: string;
    videoType?: string;
}
declare const _default: mongoose.Model<VideoI, {}, {}, {}, mongoose.Document<unknown, {}, VideoI> & Omit<VideoI & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
