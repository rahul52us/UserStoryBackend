import mongoose, { Document } from "mongoose";
interface ProjectI extends Document {
    project_name: string;
    subtitle?: string;
    description?: string;
    logo?: string;
    is_active?: boolean;
    createdBy: mongoose.Schema.Types.ObjectId;
    due_date?: string;
    company: mongoose.Schema.Types.ObjectId;
    priority?: string;
    project_manager?: mongoose.Schema.Types.ObjectId[];
    start_date?: string;
    end_date?: string;
    status?: string;
    customers?: mongoose.Schema.Types.ObjectId[];
    followers?: mongoose.Schema.Types.ObjectId[];
    team_members?: mongoose.Schema.Types.ObjectId[];
    approval?: string;
    attach_files?: any;
}
declare const _default: mongoose.Model<ProjectI, {}, {}, {}, mongoose.Document<unknown, {}, ProjectI> & Omit<ProjectI & {
    _id: mongoose.Types.ObjectId;
}, never>, any>;
export default _default;
