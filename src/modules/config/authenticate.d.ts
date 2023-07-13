import { Response, NextFunction } from "express";
declare const authenticate: (req: any, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default authenticate;
