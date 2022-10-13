const { DataTypes } = require("sequelize");
const sequelize  = require("../db/db");

const Superhero = sequelize.define('superhero',{

    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    nickname: {type: DataTypes.STRING},
    real_name: {type: DataTypes.STRING},
    origin_description: {type: DataTypes.STRING},
    superpowers: {type: DataTypes.STRING},
    catch_phrase: {type: DataTypes.STRING},
    images: {type: DataTypes.ARRAY(DataTypes.STRING)}

})

/* const Image =sequelize.define('image',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

Superhero.hasMany(Image)
Image.belongsTo(Superhero) */
/* const Universe = sequelize.define('universe',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type: DataTypes.STRING}
})

Universe.hasMany(Superhero)
Superhero.belongsTo(Universe)
 */
module.exports = Superhero