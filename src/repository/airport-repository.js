
// const { where, Op } = require('sequelize');
const {Airport} = require('../models/index');

const CrudRepository = require("./crud-repository");


// class AirportRepository {
//     async createAirport(data){
//         try {
//             if(data.length ){
//                 const airports = await Airport.bulkCreate(data);
//                 return airports;
//             }
//             const airport = await Airport.create({name: data.name, address: data.address, cityId: data.cityId});
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the airport repository layer");
//             throw {error};
//         }
//     }

//     async deleteAirport(airportId){
//         try {
//             await Airport.destroy({
//                 where:{
//                     id:airportId
//                 }
//             });
//             return true;
//         } catch (error) {
//             console.log("Wrong in deleteCity airport repository layer");
//             throw {error};
//         }
//     }

//     async updateAirport(airportId,data){
//         try {
//             // this also works but doesnot return updated object
//             const airport = await Airport.update(data,{
//                 where:{
//                     id:airportId
//                 }
//             })

//             // this return updated city
//             // const airport = await Airport.findByPk(airportId);
//             // airport.name = data.name;
//             // airport.address = data.address;
//             // airport.cityId = data.cityId;
//             // await airport.save();
//             return airport;
//         } catch (error) {
//             console.log("Wrong in airport repository layer");
//             throw {error};
//         }
//     }

//     async getAirport(airportId){
//         try {
//             const airport = await Airport.findByPk(airportId);
//             return airport;
//         } catch (error) {
//             console.log("Wrong in airport repository layer");
//             throw {error};

//         }
//     }

//     async getAllAirports(filter){
//         try {
//             if(filter.name){
//                 const airports = await Airport.findAll({
//                     where:{
//                         name:{
//                            [ Op.startsWith]:filter.name
//                         }
//                     }
//                 })
//                 return airports;
//             }
//             const airports = await Airport.findAll();
//             return airports;
//         } catch (error) {
//             console.log("Wrong in airport repository layer");
//             throw {error};

//         }
//     }
// }

// module.exports = AirportRepository;

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport)
    }
}

module.exports = AirportRepository;