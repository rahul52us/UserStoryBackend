declare const generateToken: (payload: object) => string;
export default generateToken;
export declare const generateResetPasswordToken: (userId: string) => string;
export declare const verifyResetPasswordToken: (token: string) => any;
