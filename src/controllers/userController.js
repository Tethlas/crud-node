/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import httpCodes from '../schemas/httpcodes.js';
import usersService from '../services/userService.js';

const getAllUsers = async (_req, res, next) => {
  const users = await usersService.getAllUsers();

  if (users.error) return next(users.error);
  return res.status(httpCodes.OK).json(users);
};

export default {
  getAllUsers,
};
