import express from 'express';
import authorizationController from './../controllers/auth-controller';

const router = express.Router();

router.post('/auth', authorizationController.authorization);

module.exports = router;