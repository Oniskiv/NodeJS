import City from './../models/city';

exports.allCities = (req, res) => {
    City.find((err, cities) => {
        res.status(200).json(cities);
    });
};

exports.addCity = (req, res) => {
    let city = new City({
        name: req.body.name,
        country: req.body.country,
        capital: req.body.capital,
        location: {
            lat: req.body.lat,
            long: req.body.long
        }
    });
    city.save();
    res.status(200).json(city);
};

exports.deleteCity = (req, res) => {
    City.remove({_id: req.params.id}, (err) => {
        res.status(200).json(`The city with id ${req.params.id} was deleted`);
    });
};

exports.updateCity = (req, res) => {
    City.findOne({_id: req.params.id}, (err, city) => {
        if (city !== null) {
            city.name = req.body.name;
            city.country = req.body.country;
            city.capital = req.body.capital;
            city.location.lat = req.body.lat;
            city.location.long = req.body.long;
            city.save();
            res.status(200).json(city);
        } else {
            let newCity = new City({
                name: req.body.name,
                country: req.body.country,
                capital: req.body.capital,
                location: {
                    lat: req.body.lat,
                    long: req.body.long
                }
            });
            newCity.save();
            res.status(200).json(newCity);
        }
    });
};