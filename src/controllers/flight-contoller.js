const { FlightService } = require("../services");


const flightService = new FlightService();

const create = async(req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"Successfully created a flight",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:error
        });
    }
}

const getAll = async(req,res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(201).json({
            data:flights,
            success: true,
            message: "Successfully get all flights",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message: "Not able to get all flights",
            err: error
        })
    }
}



module.exports = {
    create,
    getAll
}