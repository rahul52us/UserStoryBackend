import mongoose, { Document } from "mongoose";
interface ProfileDetailsI extends Document {
    user: mongoose.Schema.Types.ObjectId;
    nickName: string;
    mobileNo?: string;
    country?: string;
    state?: string;
    city?: string;
    linkedInLink?: string;
    githubLink?: string;
    websiteLink?: string;
}
declare const _default: mongoose.Model<ProfileDetailsI, {}, {}, {}, mongoose.Document<unknown, {}, ProfileDetailsI> & Omit<ProfileDetailsI & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
