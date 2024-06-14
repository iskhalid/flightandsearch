const {  CityService} = require('../services/index')

const cityService = new CityService();

const create = async(req,res) => {
    try {
        console.log(req.body)

        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        })
    } catch (error) {
        console.log("Error at city controller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a city",
            err:error
        })
    }
}

// DELETE -> /city/:id
const destroy = async(req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            err:{}
        })
    } catch (error) {
        console.log("Error at city controller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete a city",
            err:error
        })
    }
}

// GEt -> city/:id
const get = async(req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully fetched a city",
            err:{}
        })
    } catch (error) {
        console.log("Error at city controller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a city",
            err:error
        })
    }
}

// PATCH -> /city/:id -> req.body
const update = async(req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully fetched a city",
            err:{}
        })
    } catch (error) {
        console.log("Error at city controller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update a city",
            err:error
        })
    }
}

const getAll = async(req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:"Successfully fetched all cities",
            err:{}
        })
    } catch (error) {
        console.log("Error at city controller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get all citites",
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}

