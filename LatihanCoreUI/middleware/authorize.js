function routingRole(role) {
  return (req, res, next) => {
    if (req.user.role != role) {
      return res.send("Route not allowed");
    }
    next();
  };
}

module.exports = {
  routingRole,
};
