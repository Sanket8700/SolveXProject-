const express = require("express");
const route = express();
route.use(express.json());
route.disable("x-powered-by");
const { requestMethodCheck } = require("../utils/MethodHelpr");


const UserdataController = require("../controller/UserdataController")
const GetQuestionsController = require("../controller/GetQuestionsController")






route.all('/Onboard', requestMethodCheck(['POST']), UserdataController.userdataRequerst);
route.all('/getQuestion', requestMethodCheck(['GET']), GetQuestionsController.getQuestionsRequerst);



module.exports = route;