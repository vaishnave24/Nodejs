const bcrypt = require("bcryptjs");
const connectSqlDB = require("../db/sqlConnection");

exports.checkUser = (phone) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT phone,password FROM employees WHERE phone = ?";
    connectSqlDB.query(query, [phone], (err, results) => {
      if (err) {
        return reject(err);
      }
      if (!results || results.length === 0) {
        return resolve(null);
      }
      resolve(results[0]);
    });
  });
};


exports.checkuser = async (phone) => {
  const query = "select phone,password from employees where phone = ?";
  console.log(phone);

  return new Promise((resolve, reject) => {
    connectSqlDB.query(query, [phone], (err, result) => {
      if (err) {
        console.log(query);
        return reject(err); //if error
      }
      if (result.length > 0) {
        console.log(query);
        return resolve(result[0]); // return user
      } else {
        console.log(query);

        return resolve(null); // no user found
      }
    });
  });
};


// Insert employee into DB
exports.registerEmployeeService = async (
  emp_id,
  first_name,
  last_name,
  email,
  phone,
  hire_date,
  job_title,
  salary,
  password
) => {
  try {
    // Hash password
    console.log(
      "servicelog",
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO employees
      (emp_id, first_name, last_name, email, phone, hire_date, job_title, salary, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await connectSqlDB.query(sql, [
      emp_id,
      first_name,
      last_name,
      email,
      phone,
      hire_date,
      job_title,
      salary,
      hashedPassword,
    ]);
    return {
      emp_id,
      first_name,
      last_name,
      email,
      phone,
      hire_date,
      job_title,
      salary,
    };
  } catch (error) {
    throw error; // let controller handle it
  }
};
