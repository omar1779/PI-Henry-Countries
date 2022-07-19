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
            res.send("DB HAD ALREADY DATA");
        }
        res.send("DB IS ALREADY FILLED");
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
