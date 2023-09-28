const express = require("express")
const tourController = require("../controllers/toursController")
const router = express.Router()

// router.param("id", tourController.checkId)

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour)

router
  .route("/model")
  .post(tourController.createTourModel)

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.editTourModel)
  .delete(tourController.removeTourModel)

module.exports = router
