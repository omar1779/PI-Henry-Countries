import axios from 'axios'
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME'
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID'
export const POST_ACTIVITY_COUNTRY = 'POST_ACTIVITY_COUNTRY'

export function getCountryFilter (page ,order , filter){
    return async function (dispatch){
        try {
            let json = await axios (`http://localhost:3001/countries?page=${page}&order=${order}&filter=${filter}`)
            return dispatch ({
                type : GET_ALL_COUNTRIES,
                payload : json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getCountryName (nombre){
    return async function (dispatch){
        try {
            let json = await axios(`http://localhost:3001/countries?name=${nombre}`)
            return dispatch ({
                type : GET_COUNTRY_NAME,
                payload : json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getCountryId (id){
    return async function (dispatch){
        try {
            let json = await axios(`http://localhost:3001/countries/${id}`)
            return dispatch ({
                type : GET_COUNTRY_ID,
                payload : json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function PostActivityCountry (name,duration,difficulty,season,countryId){
    return async function (dispatch){
        try {
            let response = await axios.post(`http://localhost:3001/activities`,{
                name ,
                duration ,
                difficulty ,
                season,
                countryId
            })
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}
