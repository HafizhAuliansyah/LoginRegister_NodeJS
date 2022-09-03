const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");

const hbs = require("hbs");
const app = express();
const User = require("./models/user");
const router = require("./routes");
// Use Session
app.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);
// Use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

const publicDirectoryPath = path.join(__dirname);

app.use(express.static(publicDirectoryPath));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "html");
app.engine("html", require("hbs").__express);

const viewPath = path.join(__dirname, "views");
app.set("views", viewPath);
// Partial dir set
const partialsPath = path.join(__dirname, "partials");
hbs.registerPartials(partialsPath);

// Use routing
app.use(express.json());
app.use("/", router);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// passport.use(
//   new LocalStrategy(function (username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, { message: "User doesn't exists" });
//       }
//       if (!user.verifyPassword(password)) {
//         return done(null, false, {
//           message: "Invalid Password",
//         });
//       }
//       return done(null, user);
//     });
//   })
// );

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
