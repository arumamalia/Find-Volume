const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import validator
const pemasokValidator = require("../middlewares/validators/pemasokValidator");

// Import controller
const pemasokController = require("../controllers/pemasokController");

// If GET (/transaksi), will go to getAll function in transaksiController class
router.get("/", pemasokController.getAll);

// If GET (/transaksi/:id), will go to getOne function in transaksiController
router.get("/:id", pemasokController.getOne);

// If POST (/transaksi), will go to transaksiValidator.create first
// If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
router.post("/", pemasokValidator.create, pemasokController.create);

// If POST (/transaksi), will go to transaksiValidator.create first
// If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
router.put("/:id", pemasokValidator.update, pemasokController.update);

// If DELETE (/transaksi/:id), will go to transaksiController.delete
router.delete("/:id", pemasokController.delete);

module.exports = router; // Export router
