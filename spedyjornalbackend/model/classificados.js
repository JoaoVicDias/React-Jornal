const Sequelize = require('sequelize').Sequelize

const sequelize  = require('../util/database')


const classificados = sequelize.define("classificados",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
   description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    date:{
        type:Sequelize.STRING,
        allowNull:false
    }
})


module.exports = classificados