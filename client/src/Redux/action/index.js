export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME'
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID'
export const POST_ACTIVITY_COUNTRY = 'POST_ACTIVITY_COUNTRY'

export function getAllCountries (page, order,){
    return function (dispatch){
        fetch(`http://localhost:3001/countries/?page=0&order=ASC`)
    }
}
export function getCountryName (){}
export function getCountryId (){}
export function PostActivityCountry (){}
