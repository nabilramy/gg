const router = require('express').Router();
const { getOperations, addOperation } = require('../controllers');
const { verifyToken } = require('../utils');

router.get('/:id', getOperations);
router.post('/:id', verifyToken, addOperation);

module.exports = router;
