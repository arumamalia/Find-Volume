// Express
const express = require("express");
const app = express();

// Import routes
const barangRoutes = require("./routes/barangRoutes");
const transaksiRoutes = require("./routes/transaksiRoutes");
const pelangganRoutes = require("./routes/pelangganRoutes");
const pemasokRoutes = require("./routes/pemasokRoutes");


//Set body parser for HTTP post operation
app.use(express.json()); // support json encoded bodies
app.use(
  express.urlencoded({
    extended: true,
  })
); // support encoded bodies

// set static assets to public directory (usually for images, videos, and other files)
app.use(express.static("public"));

// Import table relationship
require("./utils/associations");

app.use("/barang", barangRoutes); // if accessing localhost:3000/barang/* we will go to barangRoutes
app.use("/transaksi", transaksiRoutes); // if accessing localhost:3000/transaksi/* we will go to transaksiRoutes
app.use("/pelanggan", pelangganRoutes);
app.use("/pemasok", pemasokRoutes);

// Server running
app.listen(3000, () => console.log("server running on port 3000"));