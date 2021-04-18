import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import './components.css'

function StatisticsCard( ) {  
  
    const initialState = {
      watchHours : '0',
      carbonFootprint : '0'
    } 

    const [state, setState] = useState(initialState)

    useEffect(() => {}, [])

    return (
        <Card style={{ }}>
            <Card.Body>
                <Card.Title> Watch Statistics </Card.Title>
                <p> My total watch hours (yearly) </p>
                <h3> {state.watchHours} </h3>
                <p> My carbon footprint</p>
                <h3> {state.carbonFootprint} </h3>
            </Card.Body>
        </Card>
    );
}

export default StatisticsCard;