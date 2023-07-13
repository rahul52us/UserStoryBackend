import { NextFunction, Response } from "express";
import Videos from "../../schemas/Videos";
import { generateError } from "../config/function";

const createVideo = async (req: any, res: Response, next: NextFunction) => {
  try {
    if (false) {
    }
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
