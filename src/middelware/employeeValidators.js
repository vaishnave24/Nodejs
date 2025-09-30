const { body } = require("express-validator");

const employeeRegisterValidator = [
  body("emp_id")
    .notEmpty()
    .withMessage("Employee Id is required")
    .isInt()
    .withMessage("Employee Id must be an integer"),

  body("first_name")
    .notEmpty()
    .withMessage("First Name is required")
    .isString()
    .withMessage("First Name must be a string"),

  body("last_name")
    .notEmpty()
    .withMessage("Last Name is required")
    .isString()
    .withMessage("Last Name must be a string"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isNumeric()
    .withMessage("Phone must contain only digits")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone must be exactly 10 digits"),

  body("hire_date")
    .notEmpty()
    .withMessage("Hire date is required")
    .isDate()
    .withMessage("Invalid date format (YYYY-MM-DD expected)"),

  body("job_title").notEmpty().withMessage("Job title is required"),

  body("salary")
    .notEmpty()
    .withMessage("Salary is required")
    .isFloat({ min: 0 })
    .withMessage("Salary must be a valid number"),
];

module.exports = { employeeRegisterValidator };
