const { Router } = require('express');
const { get, register, login } = require('./controller');
const userMiddleware = require('../middleware/UserMiddleware');
const router = Router();

router.get('/', userMiddleware(), (req, res) => get(req, res));
router.post('/auth/register', register);
router.post('/auth/login', login);

module.exports = router;
