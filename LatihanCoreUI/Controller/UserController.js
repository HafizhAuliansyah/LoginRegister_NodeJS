const Transaksi = require("../models/transaksi");

function showDashboard(req, res) {
   // Ambil data transaksi
   var query;
   if (req.user.role == "admin") {
      query = Transaksi.find({}).catch((err) => {
         console.log(err);
      });
   } else {
      query = Transaksi.find({ created_by: req.user.username }).catch((err) => {
         console.log(err);
      });
   }
   var adminAuthorize = req.user.role == "admin" ? true : false;
   query.then(function (data) {
      res.render("index", {
         username: req.user.username,
         admin: adminAuthorize,
         data_transaksi: data,
      });
   });
}

module.exports = {
   showDashboard,
};
