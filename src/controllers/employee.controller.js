const { generateToken } = require("../middelware/genearteToken");
const {
  registerEmployeeService,
  checkUser,
  checkuser,
} = require("../services/employee.service");
const bcrypt = require("bcryptjs");

exports.registerEmployee = async (req, res) => {
  console.log("token",req.user);
  
  const {
    emp_id,
    first_name,
    last_name,
    email,
    phone,
    hire_date,
    job_title,
    salary,
    password,
  } = req.body;
  try {
    const checkEmployee = await checkUser(phone);
    if (checkEmployee) {
      return res.status(400).json({
        message: "User with this phone already exist",
        data: checkEmployee,
      });
    }
    const response = await registerEmployeeService(
      emp_id,
      first_name,
      last_name,
      email,
      phone,
      hire_date,
      job_title,
      salary,
      password
    );
    return res.status(200).json({
      message: "User registered successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error in registerEmployee:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.loginEmployee = async (req, res) => {
  const { phone, password } = req.body;
  try {
    //checked phone or user is present or not
    const isUser = await checkUser(phone);
    console.log("isUser", isUser);

    if (!isUser) {
      return res.status(400).json({
        message: "You are not registered",
        statusCode: 400,
      });
    }

    //checked password
    const isMatchpassword = await bcrypt.compare(password, isUser.password);
    if (!isMatchpassword) {
      return res.status(400).json({
        message: "Inavalid Password",
        statusCode: 400,
      });
    } else {
      const createToken = await generateToken(isUser);
      console.log("createToken", createToken);

      const response = {
        isUser,
        createToken,
      };
      return res.status(400).json({
        message: "Logged in Sucessfully",
        statusCode: 400,
        data: response,
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
