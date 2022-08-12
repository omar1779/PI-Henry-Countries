/* import React from "react"
import './style/detail.css'

export default function TextExample ({activity,duration,difficulty,season}){
    return (
        <div className="container-activity">
            <h3 className="activity">Activities created</h3>
            <p className="activity">{activity}</p>
            <p className="activity">{duration}</p>
            <p className="activity">{difficulty}</p>
            <p className="activity">{season}</p>
        </div>
    )
} */
import Card from 'react-bootstrap/Card';

function TextExample({activity,duration,difficulty,season}) {
    return (
        <Card className='bg-dark' style={{
            width: '15.8.5rem',
            margin: '30px',
            flexwrap: 'wrap',
            }}>
        <Card.Body>
            <Card.Title>Activities created</Card.Title>
            <Card.Subtitle className="mb-2 text-light bg-dark">{activity}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-light bg-dark">{duration}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-light bg-dark">{difficulty}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-light bg-dark">{season}</Card.Subtitle>
        </Card.Body>
        </Card>
    );
}

export default TextExample;
