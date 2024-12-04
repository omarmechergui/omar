const express = require("express");
const { createUser , deleteuser} = require("../controller/users");
const userrouter = express.Router();
userrouter.post('/add',createUser);
userrouter.delete("/delete/:id",deleteuser);

module.exports=userrouter;