const express = require("express");
const { postContactMe, getView } = require("../Controllers/userController");

const postContactMeRouter = express.Router();
const getViewRouter = express.Router();

postContactMeRouter.post('/', postContactMe);
getViewRouter.get('/', getView);

exports.postContactMeRouter = postContactMeRouter
exports.getViewRouter = getViewRouter