const { where } = require("sequelize");


class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong at crud repository")
            throw {error}
        }
    }
    async destroy(modelId){
        try {
            await this.model.destroy({
                where:{
                    id:modelId
                }
            })
            return true
        } catch (error) {
            console.log("Something went wrong at crud repository")
            throw {error}
        }
    }
    async update(data,modelId){
        try {
            const result = await this.model.update(data,{
                    where:{
                        id:modelId
                    }
                })
        } catch (error) {
            console.log("Something went wrong at crud repository")
            throw {error}
        }
    }
    async get(modelId){
        try {
            const result = await this.model.findByPk(modelId)
            return result;
        } catch (error) {
            console.log("Something went wrong at crud repository")
            throw {error}
        }
    }
    async getAll(){
        try {
            const result = await this.model.findAll()
            return result;
        } catch (error) {
            console.log("Something went wrong at crud repository")
            throw {error}
        }
    }
}


module.exports = CrudRepository;