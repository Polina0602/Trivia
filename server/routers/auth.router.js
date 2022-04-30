const { Router } = require("express"); 
const router = Router(); 
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");


<<<<<<< HEAD

require("dotenv").config();

// app.use("cors"());



// // //email
=======
>>>>>>> 63c6dcbef875cb5396f3dad0f06250fcc4ce458e

require("dotenv").config();

// app.use("cors"());



// // //email

// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');

// // These id's and secrets should come from .env file.
// const CLIENT_ID = '602070662525-cg5up3456lcbdngu7nhji2j6inpi8t1b.apps.googleusercontent.com'
// const CLIENT_SECRET = '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'
// const REFRESH_TOKEN = '1//04Nh8YSb1wH3PCgYIARAAGAQSNwF-L9IrR-GTcsE5kkj2GJC3b-rQlogesx35R2TVc4TUABfIBHKxs48hxyYrVYNBzC_KhnT35uk'
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground'

// const oAuth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
// ); 
  
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  
// async function sendMail(recipient) {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               type: 'OAuth2',
//               user: 'ikatalkin67@gmail.com',
//               clientId: CLIENT_ID,
//               clientSecret: CLIENT_SECRET,
//               refreshToken: REFRESH_TOKEN,
//               accessToken: accessToken,
//             },
//           });

//           const mailOptions = {
//                     from: 'TRIVIA <ikatalkin67@gmail.com>',
//                     to: recipient,
//                     subject: 'Hello from Trivia',
//                     text: 'Thank you for registering.  Have a fun game!',
//                     html: '<h3>Thank you for registering.  Have a fun game!</h3>',
//                 };

//                 console.log(CLIENT_ID)
//                 const result = await transport.sendMail(mailOptions);
                
//                     return result;
          
        
//   } catch (error) {
//         return error;
//       }
// }  
// /api/auth/register

router.post(
  "/register",
  [
    check("email", "Uncorrect Email").isEmail(),
    check("password", "Password must be minimum 6 symbols").isLength({
      min: 6,
    }),
  ],
  async (req, res) => { 
    try {
      const errors = validationResult(req);
      console.log(email)

      if (!errors.isEmpty()) {
        console.log("errors",errors)
        return res.status(400).json({
          errors: errors.array(),
          message: "Email or Password is incorrect",
        });
      }

      const { email, age, password, passwordConfirm } = req.body;

      const candidate = await User.findOne({ email });
<<<<<<< HEAD
      // console.log(email, password)
=======

      console.log(candidate)
>>>>>>> 63c6dcbef875cb5396f3dad0f06250fcc4ce458e

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} exists` });
      }

      if (password === passwordConfirm) {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, age, password: hashedPassword });

         console.log('user',user) 
        await user.save();
//         // const result = await user.save();

<<<<<<< HEAD
        //email

        try {
          const result = sendMail(user.email);

          console.log('Email sent...', result);
        }
        catch(err) {
          console.log(err)
        }
=======
//       //email
//             sendMail(user.email)
//               .then((result) => console.log('Email sent...', result))
//               .catch((error) => console.log(error.message));
>>>>>>> 63c6dcbef875cb5396f3dad0f06250fcc4ce458e

        res.status(201).json({ message: "Registration completed" });
      } else {
        return res.status(400).json({ message: "Password is not correct" });
      }
    } catch (e) {      
      res
        .status(500)
<<<<<<< HEAD
        .json({ message: e });
=======
        .json({ message: "Something is wrong, please, try again !!!" });
>>>>>>> 63c6dcbef875cb5396f3dad0f06250fcc4ce458e
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Email is incorrect").normalizeEmail().isEmail(),
    check("password", "Enter your password").exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Email or Password is incorrect",
        })
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Password is incorrect" });
      }

      const token = jwt.sign(
        { userId: user.id }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" }
      );

      res.json({ token, userId: user.id });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Something is wrong, please, try again" });
    }
  }
);

// const { googlelogin, facebooklogin } = require("../controllers/auth");

// // /api/auth/google
// router.post("/google", googlelogin);

// // /api/auth/facebook
// router.post("/facebook", facebooklogin);

module.exports = router;