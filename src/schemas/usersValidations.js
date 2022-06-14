/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import httpCodes from './httpcodes.js';

const errorMessages = {
  invalidId: '"id" must be a number!',
  noUserFound: 'No user was found',
  userNotFound: 'User not found',
  internalServerError: 'Internal Server Error',
  nameIsRequired: '"name" is required',
  nameLengthGreaterThanFour: '"name" length must be at least 5 characters long',
  userAlreadyExists: 'User already exists',
};

const errorObjects = {
  invalidId: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.invalidId },
  },
  noUserFound: {
    error: { code: httpCodes.NOT_FOUND, message: errorMessages.noUserFound },
  },
  userNotFound: {
    error: { code: httpCodes.NOT_FOUND, message: errorMessages.userNotFound },
  },
  internalServerError: {
    error: { code: httpCodes.INTERNAL_SERVER_ERROR, message: errorMessages.internalServerError },
  },
  nameIsRequired: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.nameIsRequired },
  },
  nameLengthGreaterThanFour: {
    error: {
      code: httpCodes.UNPROCESSABLE_ENTITY,
      message: errorMessages.nameLengthGreaterThanFour,
    },
  },
  userAlreadyExists: {
    error: { code: httpCodes.CONFLICT, message: errorMessages.userAlreadyExists },
  },
};

const usersValidations = { errorMessages, errorObjects };

export default usersValidations;
