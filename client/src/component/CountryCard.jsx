import React from 'react';
import './style/card.css'

  // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.
const CountryCard = ({name , flag ,continent, population,capital,subregion,area,id}) => {
        return (
            <div className='CountryCard'>
            <img src={`${flag}`} alt="img not found"/>
            <h3 className='name'>{name}</h3>
            <p className='continent'>Continent :{continent}</p>
            <p>{id}</p>
            <p>{capital}</p>
            <p>{subregion}</p>
            <p>{area}</p>
            <p>Population :{population}</p>
            </div>
        );
    };
export default CountryCard;