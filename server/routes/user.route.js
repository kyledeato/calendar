const User = require('../controllers/user.controller');
const { authenticate } = require('../configs/jwt.config');
module.exports = function (app) {
  app.post("/api/user/register", User.register);
  app.post("/api/user/login", User.login);
  app.post('/api/user/logout', User.logout);
  // this route now has to be authenticated
//   app.get("/api/users", authenticate, User.getAll);
app.get('/api/auth', authenticate, User.getLoggedUser);
app.get('/api/user', User.getAllUsers)
}