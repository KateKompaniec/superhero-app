const Superhero = require('../models/models')


    async function getHeroes() {
        return await Superhero.findAll()
    }

    async function createHero(superhero) {
        return await Superhero.create(superhero)
    }

    async function getHeroByName(nickname) {
        return await Superhero.findAll({
            where: {
                nickname: nickname
            }
        })
    }

    async function updateHero(id, superhero) {
        return await Superhero.update( superhero , {
            where: {
                id: id
            }
        })
    }
    async function deleteHero(id){
        return await Superhero.destroy({where: {
            id: id
        }})
    }

module.exports= {
    getHeroes,
    createHero,
    updateHero,
    deleteHero,
    getHeroByName
}