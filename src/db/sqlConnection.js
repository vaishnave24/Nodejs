const mysql = require('mysql');
require('dotenv').config();
const connectSqlDB = async ()=>{
const connectionSqlDB = mysql.createConnection({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
})

connectionSqlDB.connect((err)=>{
    if(!err)
    {
        console.log(
            `2. Server connected to SQL db......................✅ ${process.env.DB_NAME}`
          );
        
    }
    else{

        console.log("error to connect database")
        
    }
})
}


module.exports = connectSqlDB;