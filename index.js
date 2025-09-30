const connectDB = require("./src/db/mongoDbConnection");
require("dotenv").config();
const app = require("./app")
const connection = require('./src/db/sqlConnection') // sqlconnection

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080);
    console.log(`serever lisnting on ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log("Mongo Db connection failed", err);
  });

  connection();// sqlconnection
