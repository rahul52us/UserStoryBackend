"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProject = exports.createProject = void 0;
const Project_1 = __importDefault(require("../../schemas/Project"));
const validation_1 = require("./utils/validation");
const function_1 = require("../config/function");
const createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = validation_1.ProjectCreateValidation.validate(req.body);
        if (result.error) {
            throw (0, function_1.generateError)(result.error.details, 422);
        }
        if (req.bodyData.role !== "admin") {
            throw (0, function_1.generateError)("cannot create the project", 400);
        }
        const projects = yield Project_1.default.findOne({
            project_name: req.body.project_name.trim(),
            company: req.bodyData.company,
        });
        if (projects) {
            throw (0, function_1.generateError)(`${req.body.project_name} project name is already exists`, 400);
        }
        const instance = new Project_1.default({
            project_name: (_a = req.body.project_name) === null || _a === void 0 ? void 0 : _a.trim(),
            createdBy: req.bodyData._id,
            subtitle: req.body.subtitle,
            description: req.body.description,
            company: req.bodyData.company,
            logo: req.body.logo,
            project_manager: req.body.project_manager,
            status: req.body.status,
            priority: req.body.priority,
            customers: req.body.customers,
            team_members: req.body.team_members,
            due_date: req.body.due_date,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            followers: req.body.followers,
            attach_files: req.body.attach_files,
        });
        const savedProject = yield instance.save();
        if (!savedProject) {
            throw (0, function_1.generateError)("cannot create the project", 400);
        }
        res.status(201).send({
            message: `${req.body.project_name} project has been created successfully`,
            data: savedProject,
            success: true,
            statusCode: 201,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createProject = createProject;
const getProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield Project_1.default.findOne({
            company: req.bodyData.company,
            project_name: req.query.project_name,
        });
        if (!project) {
            throw (0, function_1.generateError)(`${req.query.project_name} does not exists`, 400);
        }
        res.status(200).send({
            message: "get project successfully",
            title: "get project successfully",
            statusCode: 200,
            data: project,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getProject = getProject;
//# sourceMappingURL=project.js.map