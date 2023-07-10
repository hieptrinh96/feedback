//importing mysql package so the we can add our database credentials
import mysql from 'mysql'
import 'dotenv/config'
//Configuring credentials
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME, 
}
    const db = mysql.createPool(config)
//Exporting this file so that we can access this anywhere on our server by importing it.
export default db
