const userModel = require("../models/user.model");

exports.checkUserExist = async (email) => {
  return await userModel.findOne({ email });
};
//save User Data
exports.saveUser = async (
  userId,
  name,
  password,
  email,
  mobileNo,
  Date_of_Birth
) => {
  const newUser = new userModel({
    userId,
    name,
    email,
    mobileNo,
    Date_of_Birth,
    password,
  });
  await newUser.save();
  return newUser;
};

exports.findUser = async (name) => {
  console.log("name", name);
  const User = await userModel.find({
    name,
  });
  return User;
};

exports.userfindById = async (id) => {
  const user = await userModel.find({
    _id: id,
  });
  return user;
};

exports.updateUser = async (name, email) => {
  const response = await userModel.updateOne(
    { name: name },
    { $set: { email } }
  );
  return response;
};

exports.deleteUser = async (name) => {
  const response = await userModel.deleteMany({ name: name });
  return response;
};
