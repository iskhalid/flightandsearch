const { FlightRepository, AirplaneRepository } = require("../repository");
const { dateTimeCompare } = require("../utils/helper");

class FlightService {

    constructor(){
       this.airplaneRepository = new AirplaneRepository();
       this.flightRepository = new FlightRepository();

    }

    async createFlight(data){
        try {
            if(!(dateTimeCompare(data.arrivalTime,data.departureTime))){
                throw {error: "Arrival time must be greater than departure time"}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            })
            return flight;
            
        } catch (error) {
            console.log("Something went wrong at flight service layer");
            throw {error};
        }
    }

    async getAllFlights(data){
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights
        } catch (error) {
            console.log("Something went wrong at flight service layer");
            throw {error};
        }
    }
}



module.exports = FlightService;
/**
 *  {
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats -> airplane
 * }
 */