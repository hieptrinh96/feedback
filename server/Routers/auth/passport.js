import express from 'express'
import jwt from 'jsonwebtoken'
import db from '../../db/db.js'
import passport from 'passport'
import 'dotenv/config.js'
import { Strategy as GoogleStrategy } from "passport-google-oauth2";

  const router = express()

  // Passing google authenticate method as a middleware
  router.get('/google', passport.authenticate('google', {
    scope: ['profile', "email"],
  }));

  router.get("/google/callback", passport.authenticate("google", {
    failureRedirect: '/login'
  }), (req, res) => {
    if (req.user) {
      // console.log("the use is", req); 
      const user = [
        req.user.displayName,
        req.user.email
      ]
      const googleAuthToken = jwt.sign({googleAuthToken: user}, process.env.TOKEN_SECRET, {expiresIn: '1d' })
      res.cookie("googleAuthToken", googleAuthToken, {expires: new Date(Date.now() + 86400 * 1000), httpOnly: true})
      // res.redirect(`http://localhost:3000/profile?token=${googleAuthToken}`)
      res.redirect('http://localhost:3000')
      // res.status(200).json(user)
    }
    else res.redirect('/login')
  });

  router.get('/login/success', (req, res) => {
    if (req.isAuthenticated()) {
      return res.json({
        user: req.user
      })
    }
    else res.status(400).json({
      message: 'User not Authenticated',
      user: null
    })
  })

  router.get("/logout", (req, res) => {
    req.logout();
    req.session.destroy()
    res.clearCookie('connect.sid')
    res.clearCookie('googleAuthToken')
    res.status(200).json({message: 'Logged out Successfully'})
    console.log('Checking if this route was hit')
  });
  
  passport.serializeUser((user, done) => {
    done(null, user);
  })

  passport.deserializeUser((user, done) => {
    done(null, user);
  })

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,  //passing CLIENT ID
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, //Passing CLIENT SECRET, You can get this form https://console.cloud.google.com/, to know more go on line 113 of this file.
        callbackURL: 'http://localhost:5000/auth/google/callback',
      },
      function (accessToken, refreshToken, user, cb) {
        if (user.email.includes('atx')) {
          db.query('select * from Admins where email = ?', [user.email], (err, results) => {
            if (err) console.log('Error found in Admins query', err)
            if (!results.length) {
              db.query('insert into Admins set full_name = ?, email = ?', [user.displayName, user.email], (err, userAdded) => {
                if (err) console.log('Error found in adding user to admins table', err)
                else {
                  console.log(`${userAdded} was added to the admins table`)
                  cb(null, userAdded)
                }
              })
            }
            cb(null, user)
          })
        }
        else if (user.email.includes('mil')) {
          db.query("select * from users where Email = ?", [user.email], (err, results) => {
            if (err) console.log('error found in query', err)
            if (!results.length) {
              db.query('insert into users set Name = ?, Email = ?', [user.displayName, user.email], (err, userAdded) => {
                if (err) console.log('error in adding user ', err)
                  else {
                    console.log(`${user} was added`)
                    cb(null, user)
                  }
              })
            }
            cb(null, user)
          })
        }
      }
    )
  );


export {
  router
}