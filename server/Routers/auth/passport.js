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

  router.get("/google/callback", passport.authenticate("google"), (req, res) => {
      console.log('req = ', req)
      console.log('res = ', res)
      if (req.user) {
        console.log("the use is", req.user); 
        const googleAuthToken = jwt.sign({googleAuthToken: req.user.email}, "xe6rctyuvi", {expiresIn:86400000 })
        res.cookie("googleAuthToken", googleAuthToken, {expires: new Date(Date.now() + 86400 * 1000), httpOnly: true})
        res.redirect("http://localhost:3000")
      }
  });

  router.get("/logout", (req, res) => {
    req.logout();
    res.json({
      logout: req.user
    })
  });
  
  passport.serializeUser((user, done) => {
    console.log('serialize user = ', user)
    done(null, user);
  })

passport.deserializeUser((user, done) => {
    console.log('deserialize user = ', user)
    done(null, user);
  })

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,  //passing CLIENT ID
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, //Passing CLIENT SECRET, You can get this form https://console.cloud.google.com/, to know more go on line 113 of this file.
        callbackURL: 'http://localhost:5000/auth/google/callback',
        // passReqToCallback: true,
        // userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
      },
      function (accessToken, refreshToken, profile, done) {
        return done(null, profile)
        // db.query(
        //   "select * from users",
        //   [profile],
        //   (err, profile) => {
        //     if (err) {
        //     console.log('error found in query', err)
        //     }
        //     console.log('show me the profile', profile)
        //   }
        // );
      }
    )
  );


export {router}