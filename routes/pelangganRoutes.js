const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import validator
const pelangganValidator = require("../middlewares/validators/pelangganValidator");

// Import controller
const pelangganController = require("../controllers/pelangganController");

// If GET (/transaksi), will go to getAll function in transaksiController class
router.get("/", pelangganController.getAll);

// If GET (/transaksi/:id), will go to getOne function in transaksiController
router.get("/:id", pelangganController.getOne);

// If POST (/transaksi), will go to transaksiValidator.create first
// If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
router.post("/", pelangganValidator.create, pelangganController.create);

// If POST (/transaksi), will go to transaksiValidator.create first
// If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
router.put("/:id", pelangganValidator.update, pelangganController.update);

// If DELETE (/transaksi/:id), will go to transaksiController.delete
router.delete("/:id", pelangganController.delete);

module.exports = router; // Export router
