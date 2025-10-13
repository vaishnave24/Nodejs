const express = require("express");
const userRouter = require("../Nodejs/src/routes/user.route");
const cookieParser = require("cookie-parser");
const { employee } = require("./src/routes/employee.route");
const {connectionSqlDB} = require("./src/db/sqlConnection");
const { verify_access_token } = require("./src/middelware/verifyToken");
const { errorHandler } = require("./src/middelware/errorhandler");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(verify_access_token);
app.use("/app/v1/user", userRouter);
app.use("/app/v1/employee",employee)

app.use(errorHandler);
module.exports = app;
