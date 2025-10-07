const { registerEmployee, loginEmployee } = require("../controllers/employee.controller");
const { employeeRegisterValidator, userValidator } = require("../middelware/employeeValidators");
const { validaterequest } = require("../middelware/validateRequest");

express = require("express");
const router = express.Router();


router.post("/register",[validaterequest,employeeRegisterValidator],registerEmployee);

router.post("/login",[validaterequest,userValidator],loginEmployee)

module.exports = {employee:router};
