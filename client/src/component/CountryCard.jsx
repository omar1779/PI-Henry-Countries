/* import React from 'react';
import './style/card.css'

  // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.
const KitchenSinkExample = ({name , flag ,continent, population,capital,subregion,area,id,tld}) => {
        return (
            <div className='KitchenSinkExample'>
            <img src={`${flag}`} alt="img not found"/>
            <h3 className='name'>{name}</h3>
            <p className='continent'>Continent :{continent}</p>
            <p>{id}</p>
            <p>{capital}</p>
            <p>{subregion}</p>
            <p>{area}</p>
            <p>{tld}</p>
            <p>Population :{population}</p>
            </div>
        );
    };
export default KitchenSinkExample; */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function KitchenSinkExample({name , flag ,continent, population,capital,subregion,area,id,tld}) {
	return (
		<Card className='md' style={{
		width: '15.8.5rem',
		margin: '30px',
		flexwrap: 'wrap',
		}}
		>
		<Card.Img style={{
		width: '250px',
		height: '150px'
		}} variant="top" src={`${flag}`} />
		<Card.Body style={{
		textDecoration: 'none'
		}}
		className={'bg-dark text-decoration-none text-light'}>
			<Card.Title>{name}</Card.Title>
		</Card.Body>
		<ListGroup className="list-group-flush">
			<ListGroup.Item className={'bg-dark text-decoration-none text-light'}>
			<p>{continent && `continent : ${continent}` }</p>
			<p>{population && `population : ${population}` }</p>
			<p>{id}</p>
            <p>{capital}</p>
            <p>{subregion}</p>
            <p>{area}</p>
			</ListGroup.Item>
		</ListGroup>
		</Card>
	);
}

export default KitchenSinkExample;