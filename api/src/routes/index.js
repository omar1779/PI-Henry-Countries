const { json } = require('body-parser');
const bodyParser = require('body-parser');
const { Router } = require('express');
const axios = require('axios').default;
const {Activity , Country} = require('../db.js')
const { Op } =require('sequelize')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(bodyParser.json())

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const removeCharacters = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036fÅ]/g, ""); // eimino acentos y caracter Å
};
/* const data = async () =>{

    //console.log("recibo la data",Arr.data); //recibe la data de la api
    return Arr.data;
} */

router.get('/countries', async (req , res)=>{
    const name = req.query.name
    try {
        let full = Country.findAll(); // verifico si mi tabla esta llena
        if(!full.length) {
            const Arr = await axios.get('https://restcountries.com/v3/all')
            const data = Arr.data.map((e) => {
                return {
                id: e.cca3,
                name: removeCharacters(e.name.common),
                flag: e.flags[1],
                continent: e.continents[0],
                capital: e.capital ? e.capital[0] : "doesn't have capital",
                subregion: e.subregion,
                area: e.area,
                population: e.population,
                };
            });
            await Country.bulkCreate(data);
        }else {
            res.status(200);
        }
    } catch (error) {
        console.log(error)
    }
'----------------------------------------------------------------------------'
/* The above code is a function that is used to search for a country by name. */
    if (name){
        try {
            let nameDb = await Country.findAll({
                where : {
                    name :{
                        [Op.iLike] : '%' + name + '%'
                    }
                }
            })
            return res.status(200).json(nameDb)
        } catch (error) {
            res.send(error ,'no existe el pais')
        }
    }

})
router.get('/countries/:id', async (req , res)=>{
    const id = req.params.id
    console.log(id,'id de query')
    try {
        let idDb = await Country.findByPk(id)
        return res.status(200).json(idDb)
    } catch (error) {
        console.log(error, 'soy un error');
    }
})

module.exports = router;
