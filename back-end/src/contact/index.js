const { Router } = require('express');
const { add } = require('./controller');
const router = Router();

router.post('/', add);
// router.patch('/edit', edit);

module.exports = router;
