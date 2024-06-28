const { where, Op } = require('sequelize');
const {City} = require('../models/index');
const {Airport} = require('../models/index');


class CityRepository {
    async createCity(data){
        try {
            if(data.length ){
                const cities = await City.bulkCreate(data);
                return cities;
            }
            const city = await City.create({name: data.name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Wrong in deleteCity repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            // this also works but doesnot return updated object
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // })

            // this return updated city
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Wrong in getcity repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Wrong in getcity repository layer");
            throw {error};

        }
    }

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                           [ Op.startsWith]:filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Wrong in getallcities repository layer");
            throw {error};

        }
    }

    async getAirportsByCity(cityId){
        try {
            const city = await City.findByPk(cityId, {
                include: {
                  model: Airport,
                  as: 'airports',
                },
              })
        } catch (error) {
            console.log("wrong in getairportsbycity repository layer");
            throw {error};
        } 

    }
}

module.exports = CityRepository;