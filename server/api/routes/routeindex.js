const express = require('express');
const router = express.Router();

const logController = require("../controller/logAPI");


router.post("/", logController.insertLog);


module.exports = router