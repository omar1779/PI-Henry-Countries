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
        let full = await Country.findAll(); // verifico si mi tabla esta llena
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
            res.status(200)
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
    } else if (req.query.filter) {
        try {
            let filterContinent = await Country.findAll({
                where : {
                    continent : req.query.filter
                },
                limit : 10,
                offset : req.query.page,
                order : [["name",req.query.order]],
                include : {model : Activity}
            });
            return res.status(200).json(filterContinent)
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            let allCountries = await Country.findAll({
                limit : 10,
                offset : req.query.page,
                order : [["name",req.query.order]],
                include : {model : Activity}
            });
            res.status(200).json(allCountries)
        } catch (error) {
            console.log(error);
        }
    }
'---------------------------------------------------------------------------------'
})
router.get('/countries/:id', async (req , res)=>{
    const {id} = req.params
    try {
        let idDb = await Country.findAll({
            where: {
                id : id
            },
            include : {
                model : Activity
            }
        })
        return res.status(200).json(idDb)
    } catch (error) {
        res.status(400 , error);
    }
})
'----------------------------------------------------------------------------------'
router.post('/activities', async (req , res)=>{
    const form = req.body;
    try {
        let [activityCreated , created] = await Activity.findOrCreate({
            where : {
                name : form.name,
                duration : form.duration,
                difficulty : form.difficulty,
                season : form.season
            }
        })
        console.log(created)
        /* relaciono las tablas */
        await activityCreated.setCountries(form.countryId)
        res.status(200).json(activityCreated)
    } catch (error) {
        console.log(error , 'soy un error :(')
    }
})

module.exports = router;
