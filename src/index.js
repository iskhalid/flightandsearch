const express = require("express");
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository')
const ApiRoutes = require('./routes/index');
const db = require("./models");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use('/api',ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    // if(process.env.SYNC_DB){
    //   db.sequelize.sync({alter:true});
    // }

  });
};

setupAndStartServer();
