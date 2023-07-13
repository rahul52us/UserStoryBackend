import mongoose, { Document } from "mongoose";
interface TestimonialI extends Document {
    name: string;
    user: mongoose.Schema.Types.ObjectId;
    profession: string;
    company: mongoose.Schema.Types.ObjectId;
    image: mongoose.Schema.Types.ObjectId;
    description: string;
}
declare const _default: mongoose.Model<TestimonialI, {}, {}, {}, mongoose.Document<unknown, {}, TestimonialI> & Omit<TestimonialI & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
