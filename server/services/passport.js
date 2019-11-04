const keys = require('../config/dev');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

//

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // allows google to give us 'read' permission
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      // Show's the logged in profile
      // comes in handy for nodemailer!
      console.log('profile: ', profile);
    }
  )
);
