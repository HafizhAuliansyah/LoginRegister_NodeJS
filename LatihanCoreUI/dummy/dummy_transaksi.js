const Transaksi = require("../models/transaksi");
const UserDetails = require("../models/user");

async function generateDummyPanji() {
   let DataFind = await UserDetails.findOne({ username: "panji" });
   const transaksiPanji = [
      {
         deskripsi: "Pemasukkan bulanan panji",
         jumlah: 1000000,
         tipe: "pemasukan",
         created_by: DataFind.username,
      },
      {
         deskripsi: "Pengeluaran kebutuhan pokok panji",
         jumlah: 500000,
         tipe: "pengeluaran",
         created_by: DataFind.username,
      },
      {
         deskripsi: "Pengeluaran transportasi panji",
         jumlah: 500000,
         tipe: "pengeluaran",
         created_by: DataFind.username,
      },
   ];

   Transaksi.insertMany(transaksiPanji)
      .then((value) => {
         console.log("Success dummy panji");
      })
      .catch((error) => {
         console.log(error);
      });
}

async function generateDummyHafizh() {
   let DataFind = await UserDetails.findOne({ username: "hafizh" });
   const transaksiHafizh = [
      {
         deskripsi: "Pemasukkan bulanan hafizh",
         jumlah: 1000000,
         tipe: "pemasukan",
         created_by: DataFind.username,
      },
      {
         deskripsi: "Pengeluaran kebutuhan pokok hafizh",
         jumlah: 700000,
         tipe: "pengeluaran",
         created_by: DataFind.username,
      },
      {
         deskripsi: "Pengeluaran transportasi hafizh",
         jumlah: 300000,
         tipe: "pengeluaran",
         created_by: DataFind.username,
      },
   ];

   Transaksi.insertMany(transaksiHafizh)
      .then((value) => {
         console.log("Success dummy hafizh");
      })
      .catch((error) => {
         console.log(error);
      });
}
// Hapus lalu generate data
Transaksi.deleteMany({})
   .then((value) => {
      console.log("Success delete all data");
      generateDummyHafizh();
      generateDummyPanji();
   })
   .catch((err) => {
      console.log(err);
   });
