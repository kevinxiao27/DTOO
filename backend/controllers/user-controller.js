// Controller function to get all users

import User from "../models/User";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
    // 500 is failure
  }

  return res.status(200).json({ users });
  //200 is success
  // syntax { users } does not need to specify {users: user} because it is es6
};
