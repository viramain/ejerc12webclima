import React from "react";
import {Card,Container} from 'react-bootstrap';

const MuestraClima = (props) => {

        return (
        <Container className='container my-4 d-flex justify-content-center'>
        <Card className='shadow text-center'>
            <Card.Header className="lead">{props.ubicacion}, {props.pais}</Card.Header>
            <Card.Body>
                <Card.Title className='display-4 text-warning'>{props.objetoclima.temp}°C</Card.Title>
                
                <Card.Text>
                    Sensación Térmica: {props.objetoclima.feels_like} °C 
                    <br></br>
                    Mín: {props.objetoclima.temp_min} °C
                    <br></br>
                    Max: {props.objetoclima.temp_max} °C
                    <br></br>
                    Presión: {props.objetoclima.pressure} hPa
                    <br></br>
                    Humedad: {props.objetoclima.humidity} %
                </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    );
};

export default MuestraClima;
