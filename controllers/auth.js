const User = require("../models/User");
const CryptoJS = require("crypto-js");

exports.registro  = async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
  
    try {
      if ( !User ) {
          return res.status(400).json({
              ok: false,
              msg: 'Esse email já existe'
          });
      }
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  