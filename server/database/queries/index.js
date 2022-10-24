const addUserQuery = require('./users/signupQuery');
const loginUserQuery = require('./users/loginQuery');
const checkUserQuery = require('./users/checkUserQuery');
const checkBalanceQuery = require('./users/getBalanceQuery');
const addOperationQuery = require('./operations/addOperationQuery');
const getOperationsQuery = require('./operations/getOperationsQuery');

module.exports = {
  addUserQuery,
  loginUserQuery,
  checkUserQuery,
  checkBalanceQuery,
  addOperationQuery,
  getOperationsQuery,
};
