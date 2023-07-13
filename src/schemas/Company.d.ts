import mongoose, { Document } from "mongoose";
interface CompanyI extends Document {
    company_name: string;
    position_types: any;
    verified_email_allowed: boolean;
    is_active?: boolean;
    logo?: string;
    mobileNo?: string;
    workNo?: string;
    facebookLink?: string;
    instagramLink?: string;
    linkedInLink?: string;
    twitterLink?: string;
    githubLink?: string;
    telegramLink?: string;
    webLink?: string;
    country?: string;
    state?: string;
    city?: string;
}
declare const _default: mongoose.Model<CompanyI, {}, {}, {}, mongoose.Document<unknown, {}, CompanyI> & Omit<CompanyI & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
