const login = require('./users/login');
const signup = require('./users/signup');
const addOperation = require('./operations/addOperation');
const getOperations = require('./operations/getOperations');
const logout = require('./users/logout');
const getDecoded = require('./users/getIdByCookie');

module.exports = {
  signup,
  login,
  getDecoded,
  logout,
  addOperation,
  getOperations,
};
