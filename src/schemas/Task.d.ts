import mongoose, { Document } from "mongoose";
interface TaskI extends Document {
    project: mongoose.Schema.Types.ObjectId;
    title: string;
    description?: string;
    assignee?: mongoose.Schema.Types.ObjectId[];
    assigner: mongoose.Schema.Types.ObjectId;
    status: string;
    duedate?: Date;
    startDate?: Date;
    endDate?: Date;
    attach_files?: any;
    approval?: string;
}
declare const _default: mongoose.Model<TaskI, {}, {}, {}, mongoose.Document<unknown, {}, TaskI> & Omit<TaskI & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
