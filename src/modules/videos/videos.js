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
exports.createVideo = void 0;
const Videos_1 = __importDefault(require("../../schemas/Videos"));
const function_1 = require("../config/function");
const videos_validation_1 = require("./utils/videos.validation");
const createVideo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = videos_validation_1.createVideosValidation.validate(req.body);
        if (result.error) {
            throw (0, function_1.generateError)(result.error.details, 422);
        }
        req.body.createdBy = req.userId;
        req.body.company = req.bodyData.company;
        const video = new Videos_1.default(req.body);
        const savedVideo = yield video.save();
        if (!savedVideo) {
            throw (0, function_1.generateError)(`cannot create the video`, 400);
        }
        return res.status(200).send({
            message: `${savedVideo.title} video has been created successfully`,
            data: savedVideo,
            statusCode: 201,
            success: true,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createVideo = createVideo;
//# sourceMappingURL=videos.js.map