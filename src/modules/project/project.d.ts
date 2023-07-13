import { NextFunction, Response } from "express";
declare const createProject: (req: any, res: Response, next: NextFunction) => Promise<void>;
declare const getProject: (req: any, res: Response, next: NextFunction) => Promise<void>;
export { createProject, getProject };
