/* eslint-disable import/extensions */
import usersValidations from '../schemas/usersValidations.js';
import validations from '../schemas/geneticValidations.js';
import userModel from '../models/userModel.js';

const { errorObjects } = usersValidations;

const getAllUsers = async () => {
  const users = await userModel.getAllUsers();

  if (users instanceof Error) return errorObjects.internalServerError;
  if (validations.isNull(users)) return errorObjects.noUserFound;

  return users;
};

export default {
  getAllUsers,
};
