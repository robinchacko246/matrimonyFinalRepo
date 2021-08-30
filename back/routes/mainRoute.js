var express = require("express");
var mainController = require("../controllers/mainController");

exports.router = (() => {
  var mainRouter = express.Router();

  mainRouter.route("/suggestions/:uid").get(mainController.getSuggestions);
  mainRouter.route("/search").post(mainController.searchResults);
  mainRouter.route("/allProfiles").post(mainController.allResults);
  return mainRouter;
})();
