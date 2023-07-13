import { NextFunction, Response } from "express";
declare const createTestimonail: (req: any, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
declare const getTestimonials: (req: any, res: Response, next: NextFunction) => Promise<void>;
export { createTestimonail, getTestimonials };
