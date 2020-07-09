var express = require("express");
var router = express.Router();

//require controllers
const headacheController = require("../controllers/headacheController");

/* GET home page. */
router.get("/", headacheController.homePage);
router.post("/", headacheController.homePagePost);

// Today's Stats route
router.get("/todays-stats", headacheController.todaysStatsPage);

module.exports = router;
