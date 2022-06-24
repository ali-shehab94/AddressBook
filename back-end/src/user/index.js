const { Router } = require('express');
const { get, register, login } = require('./controller');

const router = Router();

router.get('/', get);
router.post('/auth/register', register);
router.post('/auth/login', login);

module.exports = router;
