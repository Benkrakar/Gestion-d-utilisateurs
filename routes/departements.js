const express = require("express");
const router = express.Router();
const departementsController = require("../controllers/departementsController.js");

router
  .route("/")
  .get(departementsController.getAllDepartements)
  .post(departementsController.createDepartement);

router
  .route("/:id")
  .get(departementsController.getDepartement)
  .patch(departementsController.updateDepartement)
  .delete(departementsController.deleteDepartement);

module.exports = router;
