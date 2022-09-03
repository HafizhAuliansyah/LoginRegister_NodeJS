// Membuat dummmy data untuk account
const UserDetails = require("./models/user");

UserDetails.register({ username: "admin123", active: false }, "admin123");
UserDetails.register({ username: "hafizh", active: false }, "hafizh123");
