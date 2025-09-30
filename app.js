const express = require("express");
const userRouter = require("../ExpressSetup/src/routes/user.route");
const cookieParser = require("cookie-parser");
const { employee } = require("./src/routes/employee.route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/app/v1/user", userRouter);
app.use("/app/v1/employee",employee)

module.exports = app;
