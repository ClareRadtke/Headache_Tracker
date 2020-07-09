const Headache = require("../models/headache");
const { NotExtended } = require("http-errors");

exports.homePage = (req, res) => {
  res.render("index", { title: "Personal Headache Tracker" });
};

exports.homePagePost = async (req, res) => {
  if (req.body.dateOf === null || req.body.dateOf === "") {
    delete req.body.dateOf;
  }
  console.log(req.body);
  const input = new Headache(req.body);
  await input.save();
  console.log(input);
  res.render("index", { title: "Personal Headache Tracker" });
};

exports.todaysStatsPage = async (req, res) => {
  try {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    console.log(currentDate);

    const headaches = await Headache.find({ dateOf: { $gt: currentDate } });
    res.render("todaysStats", { title: "Today's Stats", headaches: headaches });
    console.log("LOOK HERE ", headaches);
  } catch (errors) {
    NotExtended(errors);
  }
};
