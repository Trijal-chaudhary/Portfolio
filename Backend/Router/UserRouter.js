const express = require("express");
const { postContactMe } = require("../Controllers/userController");

const postContactMeRouter = express.Router();

postContactMeRouter.post('/', postContactMe)

exports.postContactMeRouter = postContactMeRouter