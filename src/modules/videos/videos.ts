import { NextFunction, Response } from "express";
import Videos from "../../schemas/Videos";
import { generateError } from "../config/function";
import {createVideosValidation} from './utils/videos.validation'

const createVideo = async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = createVideosValidation.validate(req.body)
    if (result.error) {
      throw generateError(result.error.details, 422);
    }
    req.body.createdBy = req.userId
    req.body.company = req.bodyData.company
    const video = new Videos(req.body);
    const savedVideo = await video.save();
    if (!savedVideo) {
      throw generateError(`cannot create the video`, 400);
    }
    return res.status(200).send({
      message: `${savedVideo.title} video has been created successfully`,
      data: savedVideo,
      statusCode: 201,
      success: true,
    });
  } catch (err: any) {
    next(err);
  }
};

export { createVideo };
