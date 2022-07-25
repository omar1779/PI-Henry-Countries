import React from 'react';

  // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


const CountryCard = ({name , flag ,continent}) => {
        return (
            <div>
            <img src={`${flag}`} alt="img not found"/>
            <h3>{name}</h3>
            <p>Continent :{continent}</p>
            </div>
        );
    };

export default CountryCard;