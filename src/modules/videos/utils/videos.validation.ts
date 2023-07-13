import * as Joi from 'joi';

const createVideosValidation = Joi.object({
  title: Joi.string().min(2).max(120).trim().required().messages({
    'string.base': 'Title is required',
    'string.empty': 'Title is required',
    'string.min': 'Title should be at least 2 characters',
    'string.max': 'Title should not exceed 120 characters',
    'any.required': 'Title is required',
  }),
  videoType: Joi.string().required().messages({
    'string.base': 'Select any video type',
    'string.empty': 'Select any video type',
    'any.required': 'Select any video type',
  }),
  videoLink: Joi.string().min(4).max(350).trim().required().messages({
    'string.base': 'Link is required',
    'string.empty': 'Link is required',
    'string.min': 'Link should be at least 4 characters',
    'string.max': 'Link should not exceed 350 characters',
    'any.required': 'Link is required',
  }),
  description: Joi.string().min(45).max(1800).trim().messages({
    'string.base': 'Description is required',
    'string.empty': 'Description is required',
    'string.min': 'Description should be at least 45 characters',
    'string.max': 'Description should not exceed 1800 characters',
  }),
});

export {createVideosValidation};
