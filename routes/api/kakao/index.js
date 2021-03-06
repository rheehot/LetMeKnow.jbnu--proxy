const express = require('express');
const router = express.Router();

const controller = require('../../../controllers');
const { log } = require('../../../middlewares');

router.post('/message', log.saveKakaoLog, controller.kakao.message);

module.exports = router;
