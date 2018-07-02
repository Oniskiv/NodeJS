import express from 'express';
import cityController from './../controllers/city-controller';

const router = express.Router();

router.route('/cities')
    .get(cityController.allCities)
    .post(cityController.addCity);

router.put('/cities/:id', cityController.updateCity);

router.delete('/cities/:id', cityController.deleteCity);

module.exports = router;