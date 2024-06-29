const {Airplane} = require('../models/index');


class AirplaneRepository {
    async getAirplane(id){
        try {
            console.log("inside get airplane", id);
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at chekc airplane repository layer");
            throw {error};
        }
    }
}


module.exports = AirplaneRepository;