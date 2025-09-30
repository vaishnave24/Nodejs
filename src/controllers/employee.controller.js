const { asyncHandler } = require("../utils/asyncHandler");


exports.registerEmployee =  async(req,res)=>{
const {emp_id,first_name,last_name,email,phone,hire_date,job_title,salary}= req.body;
console.log("body",req.body);
try{
   res.status(200).json({
      message: "User registered successfully",
      data: req.body,
    });

}catch(error){
console.error("Error in registerEmployee:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
}
}