const Transaksi = require("../models/transaksi");
const UserDetails = require("../models/user");

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
function registerUser(req, res) {
   UserDetails.findOne({ username: req.body.username }).then((value) => {
      if (value) {
         res.send("Username sudah ada");
      } else {
         UserDetails.register({ username: req.body.username, active: false }, req.body.password);
         res.redirect("/login");
      }
   });
}

module.exports = {
   showDashboard,
   registerUser,
};
