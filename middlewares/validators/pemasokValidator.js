const { barang, pelanggan, pemasok } = require("../../models"); // Import all models
const validator = require("validator");

module.exports.create = async (req, res, next) => {
    try {
        
        let errors = [];

        // If errors length > 0, it will make errors message
        if (errors.length > 0) {
            // Because bad request
            return res.status(400).json({
                message: errors.join(", "),
            });
        }

        // It means that will be go to the next middleware
        next();
    } catch (e) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: e,
        });
    }
};

module.exports.update = async (req, res, next) => {
    try {
        
        let errors = [];

        // If errors length > 0, it will make errors message
        if (errors.length > 0) {
            // Because bad request
            return res.status(400).json({
                message: errors.join(", "),
            });
        }

        // It means that will be go to the next middleware
        next();
    } catch (e) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: e,
        });
    }
};