const fetch = require("node-fetch");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const client = new OAuth2Client(
  "602070662525-cg5up3456lcbdngu7nhji2j6inpi8t1b.apps.googleusercontent.com"
);

const User = require("../models/user.model");

exports.googlelogin = (req, res) => {
  const { tokenId } = req.body;

  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "602070662525-cg5up3456lcbdngu7nhji2j6inpi8t1b.apps.googleusercontent.com",
    })
    .then (async(response) => {
      const { email_verified, email } = response.payload;
      console.log({email})
      const googleUser = await User.findOne({ email });    

      // console.log(googleUser);
      if (!email_verified) {
        return res.status(400).json({
          error: "Something went wrong...",
        });
      } else {        
        if (!googleUser) {
          let password = email + "222";
          let newUser = new User({ email, password });
          newUser.save();
          console.log("Registration completed!");
        } else {
          const token = jwt.sign(
            { userId: googleUser.id },  
            process.env.JWT_SECRET, 
            {expiresIn: "1h",})
          res.json({ token, userId: googleUser.id });
          console.log("User has login!"); 
        }
        
      }
    });
};

// facebook login
exports.facebooklogin = (req, res) => {
  const { userID, accessToken } = req.body;

  let grurl = `https://graph.facebook.com/v2.11/${userID}/?fields=id,email&access_token=${accessToken}`;
  fetch(grurl, {
    method: "GET",
  })    
    .then(async(response) => {
      const data = await response.json()
      const { email } = data;        
      //console.log({grurl});
      const facebookUser = await User.findOne({ email });
      
      if(!facebookUser){       
        let password = email + "333";
        let newUser = new User({email, password});
        newUser.save()
         res.json( email );
        console.log("Registration completed!");
      } else {
        const token = jwt.sign(
          {userId: facebookUser.id }, 
          process.env.JWT_SECRET, 
          {expiresIn: "1h"})
          res.json({ token, userId:facebookUser.id });                
        console.log("User has login!");
      }       
      
    });
};