const Transaksi = require("../models/transaksi");

function inputTransaksi(req, res) {
   var dataTransaksi = new Transaksi({
      deskripsi: req.body.deskripsi,
      jumlah: req.body.jumlah,
      tipe: req.body.tipe,
      created_by: req.user.username,
   });

   dataTransaksi.save();
}
module.exports = {
   inputTransaksi,
};
