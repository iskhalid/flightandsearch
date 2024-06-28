const { AirportRepository } = require("../repository");


class AirportService {
    constructor(){
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data){
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error}
        }
    }

    async deleteAirport(airportId){
        try {
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(airportId,data){
        try {
            const airport = await this.airportRepository.updateAirport(airportId,data);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllAirports(filter){
        try {
            const airports = await this.airportRepository.getAllAirports({name:filter.name});
            return airports;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }



}

module.exports = AirportService