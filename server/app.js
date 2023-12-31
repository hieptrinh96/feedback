import express from 'express'
import cors from 'cors'
import db from './db/db.js'
import cookieSession from 'cookie-session'
import passport from 'passport'
import 'dotenv/config.js'
import {router as routerAuth} from '../server/Routers/auth/passport.js'
import { router as profileRouter } from '../server/Routers/profile/profile.js'
import {app as indexRouter} from '../server/Routers/auth/index.js'
import session from 'express-session'

const app = express()

const PORT = process.env.PORT || 5000;

// Adding required middlewares
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// CORS - Cross Origin Resource Sharing, our Frontend will be runing on different port (3000) and our Backend will run of 5000, it so how can frontend access backend, so we need to connect it, thats the reason we are using CORS.

app.use(cors({
    origin: "http://localhost:3000",  //only localhost:3000 can access this server
    credentials: true,  //Responding with this header to true means that the server allows cookies (or other user credentials) to be included on cross-origin requests. 
}))

app.use(express.json())

app.use(passport.initialize())
app.use(passport.session());

//Connectiog to MySQL Database
//Adding Route, "/auth" is going to be perfix for all the routes which are in ./router/auth/passport
app.use('/auth', routerAuth);
app.use('/index', indexRouter)
app.use('/profile', profileRouter)

db.getConnection((err,connection) => {
    try {
        if(err) {
            console.log('this is the error =', err)
            throw err
        }
        console.log("Connection to database is successful")
    } catch (err) {
        console.error(err)
    }
})


// Starting our port... 
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})