const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

router.post('/create', async (req, res) => {
  const token = req.cookies.token;
  if(!token) {
    res.status(401).json({
      message: "Unanuthorized"
    })
  }

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    const user = await userModel.findOne({
      _id: decoded.id
    })

    console.log(user);
  } catch(err) {
    return res.status(401).json({
      message: "Token Invalid!"
    })
  }

  // console.log(req.body);
  // console.log(req.cookies);

  res.send("Post created!");
})

module.exports = router;