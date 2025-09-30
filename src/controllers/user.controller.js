const { asyncHandler } = require("../utils/asyncHandler");
const { checkUserExist, saveUser, findUser, userfindById, updateUser, deleteUser } = require("../services/user.service");

//Register User
exports.registerUser = async (req, res) => {
  const { userId,name, password, email, mobileNo, Date_of_Birth } = req.body;
try {
  
    const saveData = await saveUser(
      userId,
      name,
      password,
      email,
      mobileNo,
      Date_of_Birth
    );
  
    res.status(201).json({
      message: "User registered successfully",
      data: saveData,
    });
} catch (error) {
  console.log("error",error);
  
}
};

exports.getUser = async (req, res) => {
  // const  name  = req.params.name;
  // const   name = req.query.name;
  // const {name} = req.params;
  const {name} = req.query;
  console.log("Fetching userId:", name);

  if (!name) {
    return res.status(400).json({
      message: "name is required",
      statusCode: 400,
    });
  }

  const user = await findUser(name);
  console.log("user",typeof user);
  
  if(!user || Object.keys(user).length === 0)
  {
    return res.status(404).json({
    message: "User with this name not found",
    statsuCode:404,
  });
  }
  

  return res.status(200).json({
    message: "User fetched successfully",
    data: user,
  });
};


exports.userById = async(req,res)=>{
  const {name} = req.params;
  console.log("id",id);
  
const getUserById = await userfindById(name)
  return res.status(200).json({
    message: "User fetched successfully",
    data: getUserById,
  });

}


exports.updateRecords = async(req,res)=>{
 const {name,email} = req.body;

 const updateRecords = await updateUser(name,email);

 return res.status(200).json({
  message:"record updated successfully",
  data:updateRecords
 })
}

exports.deleteUser = async(req,res)=>{
  const {name} = req.body;
  const deleteUserByname = await deleteUser(name);

  return res.status(200).json({
    message:"record deleted successfully",
    data:deleteUserByname
  })

}