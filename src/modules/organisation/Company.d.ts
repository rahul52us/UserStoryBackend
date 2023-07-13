import { Response, NextFunction } from "express";
declare const createCompany: (req: any, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
declare const filterCompany: (req: any, res: Response, next: NextFunction) => Promise<void>;
export { createCompany, filterCompany };
