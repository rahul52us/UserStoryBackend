import { Request, Response, NextFunction } from "express";
declare const MeUser: (req: any, res: Response) => Promise<any>;
declare const createUser: (req: Request, res: Response, next: NextFunction) => Promise<any>;
declare const VerifyEmailToken: (req: Request, res: Response, next: NextFunction) => Promise<any>;
declare const loginUser: (req: Request, res: Response, next: NextFunction) => Promise<any>;
declare const forgotPassword: (req: Request, res: Response, next: NextFunction) => Promise<void>;
declare const resetPassword: (req: Request, res: Response, next: NextFunction) => Promise<void>;
declare const getUsersByCompany: (req: any, res: Response, next: NextFunction) => Promise<void>;
export { createUser, loginUser, MeUser, forgotPassword, resetPassword, VerifyEmailToken, getUsersByCompany };
