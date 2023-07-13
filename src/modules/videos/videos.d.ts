import { NextFunction, Response } from "express";
declare const createVideo: (req: any, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export { createVideo };
