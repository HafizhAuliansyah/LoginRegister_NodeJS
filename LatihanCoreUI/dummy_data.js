// Membuat dummmy data untuk account
const UserDetails = require("./models/user");
const { ROLE } = require("./models/role");

UserDetails.register({ username: "admin", active: false, role: ROLE.ADMIN }, "admin123");
UserDetails.register({ username: "panji", active: false, role: ROLE.USER }, "hafizh123");
