const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { ROLE } = require("./role");
mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const Transaksi = new Schema({
  tgl_transaksi: {
    type: Date,
    default: Date.now,
  },
  deskripsi: {
    type: String,
    default: "Transaksi Baru",
  },
  jumlah: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Error jumlah transaksi negatif");
    },
  },
  tipe: {
    type: String,
    enum: ["pemasukan", "pengeluaran"],
  },
  created_by: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("transaksi", Transaksi, "transaksi");
