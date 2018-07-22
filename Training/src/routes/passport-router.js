import express from 'express';
import passportController from './../controllers/passport-controller';

const router = express.Router();

router.post('/login', passportController.login);
router.get('/logout', passportController.logout);

module.exports = router;