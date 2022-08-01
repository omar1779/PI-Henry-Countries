import React from "react"
import './style/detail.css'

export default function Activity ({activity,duration,difficulty,season}){
    return (
        <div className="container-activity">
            <h3 className="activity">Activities created</h3>
            <p className="activity">{activity}</p>
            <p className="activity">{duration}</p>
            <p className="activity">{difficulty}</p>
            <p className="activity">{season}</p>
        </div>
    )
}