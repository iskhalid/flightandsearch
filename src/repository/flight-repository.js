const {Flights} = require('../models/index');


class FlightRepository {

    #createFilter (data) {
        const filter = {};
        if(data.arrivalAirportId) filter.arrivalAirportId = data.arrivalAirportId;
        if(data.departureAirportId) filter.departureAirportId = data.departureAirportId;
        if(data.minPrice) Object.assign(filter,{price: {[Op.gte]:data.minPrice}});
        if(data.maxPrice) Object.assign(filter,{price: {[Op.lte]:data.maxPrice}});
        return filter;

    }

    async createFlight(data){
        try {
            console.log(data);
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository layer",error);
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository layer",error);
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterData = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: 
                filterData,
              });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the flight repository layer",error);
            throw {error};
        }
    }
}


module.exports = FlightRepository;