import React from 'react';
import './style/card.css'

  // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


const CountryCard = ({name , flag ,continent}) => {
        return (
            <div className='CountryCard'>
            <img src={`${flag}`} alt="img not found"/>
            <h3 className='name'>{name}</h3>
            <p className='continent'>Continent :{continent}</p>
            </div>
        );
    };

export default CountryCard;