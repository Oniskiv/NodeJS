import express from 'express';
import userController from './../controllers/user-controller';

const router = express.Router();

router.get('/users', userController.allUsers);

router.delete('/users/:id', userController.deleteUser);

module.exports = router;