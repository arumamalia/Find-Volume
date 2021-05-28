const { transaksi, barang, pelanggan, pemasok } = require("../models"); // Import all models

class PemasokController {
    // Get all transaksi data
    async getAll(req, res) {
        try {
            let data = await pemasok.findAll({
                // find all data of Transaksi table
                attributes: ["id", "nama"], // just these attributes that showed
            });

            // If data is nothing
            if (data.length === 0) {
                return res.status(404).json({
                    message: "Pemasok Not Found",
                });
            }

            // If success
            return res.status(200).json({
                message: "Success",
                data,
            });
        } catch (e) {
            // If error
            return res.status(500).json({
                message: "Internal Server Error",
                error: e,
            });
        }
    }

    // Get One transaksi
    async getOne(req, res) {
        try {
            let data = await pemasok.findOne({
                where: { id: `${req.params.id}` },
                // find all data of Transaksi table
                attributes: ["id", "nama"], // just these attributes that showed
            });

            // If data is nothing
            if (data.length === 0) {
                return res.status(404).json({
                    message: "Pemasok Not Found",
                });
            }

            // If success
            return res.status(200).json({
                message: "Success",
                data,
            });
        } catch (e) {
            // If error
            return res.status(500).json({
                message: "Internal Server Error",
                error: e,
            });
        }
    }

    // Create Data
    async create(req, res) {
        try {
            // Will create data
            let createdData = await pemasok.create({
                nama: req.body.nama,
            });
                // Find the new transaksi
                let data = await pemasok.findOne({
                    where: { id: createdData.id },
                    attributes: ["id", "nama"],
                });

                // If success
                return res.status(201).json({
                    message: "Success",
                    data,
                });
            } catch (e) {
                // If error
                return res.status(500).json({
                    message: "Internal Server Error",
                    error: e,
                });
            }
        }

    // Update data
    async update(req, res) {
            let update = {
                nama: req.body.nama,
            };

            try {
                // Transaksi table update data
                let updatedData = await pemasok.update(update, {
                    where: {
                        id: req.params.id,
                    },
                });

                // Find the updated transaksi
                let data = await pemasok.findOne({
                    where: { id: req.params.id },
                    attributes: ["id", "nama"],
                });

                // If success
                return res.status(201).json({
                    message: "Success",
                    data,
                });
            } catch (e) {
                // If error
                return res.status(500).json({
                    message: "Internal Server Error",
                    error: e,
                });
            }
        }

        // Delete Data
        async delete (req, res) {
            try {
                // Delete data
                let data = await pemasok.destroy({ where: { id: req.params.id } });

                // If data deleted is null
                if (!data) {
                    return res.status(404).json({
                        message: "Pemasok Not Found",
                    });
                }

                // If success
                return res.status(200).json({
                    message: "Success delete transaksi",
                });
            } catch (e) {
                // If error
                return res.status(500).json({
                    message: "Internal Server Error",
                    error: e,
                });
            }
        }
    }

module.exports = new PemasokController();
