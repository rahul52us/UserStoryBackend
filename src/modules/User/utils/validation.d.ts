import Joi from "joi";
declare const UserValidation: Joi.ObjectSchema<any>;
declare const forgotEmailValidation: Joi.ObjectSchema<any>;
declare const resetPasswordValidation: Joi.ObjectSchema<any>;
declare const loginValidation: Joi.ObjectSchema<any>;
export { UserValidation, forgotEmailValidation, resetPasswordValidation, loginValidation };
