// Importing all required libraries

import express from 'express'

// import cors from 'cors'
import cors from 'cors'
import db from './db/db.js'
import cookieSession from 'cookie-session'
import passport from 'passport'
import 'dotenv/config.js'

import {router as routerAuth} from '../server/Routers/auth/passport.js'

// creating our app using express
const app = express()

// Setting PORT
const PORT = process.env.PORT || 5000;


// Adding required middlewares
app.use(cookieSession({
    name: 'authSession',
    keys: ["askduhakdnkbiygvhbad7a6s*&^*S^D8asdbk"],
    maxAge: 24*60*60*100
}))

// CORS - Cross Origin Resource Sharing, our Frontend will be runing on different port (3000) and our Backend will run of 5000, it so how can frontend access backend, so we need to connect it, thats the reason we are using CORS.

app.use(cors({
    origin: "http://localhost:3000",  //only localhost:3000 can access this server
    credentials: true  //Responding with this header to true means that the server allows cookies (or other user credentials) to be included on cross-origin requests. 
}))

app.use(passport.initialize())
app.use(passport.session());

//Connectiog to MySQL Database
db.getConnection((err,connection) => {
    try {
        if(err) {
            console.log('this is the error =', err)
            throw err
        }
        console.log("Connection to database is successful")
        // connection.release()
    } catch (err) {
        console.error(err)
    }
})

//Adding Route, "/auth" is going to be perfix for all the routes which are in ./router/auth/passport
app.use('/auth', routerAuth);

// Starting our port... 
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
