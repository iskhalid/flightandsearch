const { Op, and } = require('sequelize');
const {Flights} = require('../models/index');


class FlightRepository {

    #createFilter (data) {
        const filter = {};
        // for shorthand
        //  filter = {...data}
        if(data.arrivalAirportId) filter.arrivalAirportId = data.arrivalAirportId;
        if(data.departureAirportId) filter.departureAirportId = data.departureAirportId;
    //    this approach implement extra query
        // if(data.minPrice && data.maxPrice) {
        //     Object.assign(filter,{[Op.and]: [{price: { [Op.gte]: data.minPrice}}, {price: { [Op.lte]: data.maxPrice }}]} )
        // }
        const priceFilter = [];
         if(data.minPrice){
            priceFilter.push({price: {[Op.gte]: data.minPrice}})
         }
        if(data.maxPrice) {
            priceFilter.push({price: {[Op.lte]: data.maxPrice}})
        }
        Object.assign(filter,{[Op.and]: priceFilter} )
        
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