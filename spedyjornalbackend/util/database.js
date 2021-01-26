const Sequelize = require('sequelize').Sequelize

const sequelize  = new Sequelize('classificados__spedy','root','35327792',{
    dialect:"mysql",
    host:"localhost"
})




module.exports = sequelize