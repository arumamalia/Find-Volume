const { barang, pelanggan, pemasok } = require("../models"); // Import all models

class BarangController {
    // Create barang
    async getAll(req, res) {
        try {
            let data = await barang.findAll({
                // find all data of Transaksi table
                attributes: ["id", "nama", "harga"], // just these attributes that showed
                include: [
                    // Include is join
                    {
                        model: pemasok,
                        attributes: ["nama"], // just this attrubute from Barang that showed
                    },
                ],
            });

            // If data is nothing
            if (data.length === 0) {
                return res.status(404).json({
                    message: "Barang Not Found",
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

    async getOne(req, res) {
        try {
            let data = await barang.findOne({
                where: { id: `${req.params.id}` },
                // find all data of Transaksi table
                attributes: ["id", "nama", "harga"], // just these attributes that showed
                include: [
                    // Include is join
                    {
                        model: pemasok,
                        attributes: ["nama"], // just this attrubute from Barang that showed
                    },
                ],
            });

            // If data is nothing
            if (data.length === 0) {
                return res.status(404).json({
                    message: "Barang Not Found",
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

    async create(req, res) {
        try {
            let createdData = await barang.create({
                nama: req.body.nama,
                harga: req.body.harga,
                id_pemasok: req.body.id_pemasok,
                image: req.body.image && req.body.image,
            });

            let data = await barang.findOne({
                where: {
                    id: createdData.id,
                },
                attributes: ["id", "harga", "image", "createdAt", "updatedAt"],
                include: [
                    // Include is join
                    { model: pemasok, attributes: ["nama"] },
                ],
            });

            return res.status(201).json({
                message: "Success",
                data,
            });
        } catch (e) {
            return res.status(500).json({
                message: "Internal Server Error",
                error: e,
            });
        }
    }

    async update(req, res) {
        let update = {
            nama: req.body.nama,
            harga: req.body.harga,
            id_pemasok: req.body.id_pemasok,
            image: req.body.image && req.body.image,
        };

        try {
            // Transaksi table update data
            let updatedData = await barang.update(update, {
                where: {
                    id: req.params.id,
                },
            });

            // Find the updated transaksi
            let data = await barang.findOne({
                where: { id: req.params.id },
                attributes: ["id", "harga", "image", "createdAt", "updatedAt"], // just these attributes that showed
                include: [
                    // Include is join
                    {
                        model: pemasok,
                        attributes: ["nama"], // just this attrubute from Barang that showed
                    },
                ],
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

    async delete(req, res) {
        try {
            // Delete data
            let data = await barang.destroy({ where: { id: req.params.id } });

            // If data deleted is null
            if (!data) {
                return res.status(404).json({
                    message: "Barang Not Found",
                });
            }

            // If success
            return res.status(200).json({
                message: "Success delete barang",
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

module.exports = new BarangController();