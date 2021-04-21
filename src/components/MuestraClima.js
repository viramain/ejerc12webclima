import React from "react";
import Card from 'react-bootstrap/Card';

const MuestraClima = (props) => {
    return (
        <section className='container my-4 d-flex justify-content-center'>
        <Card style={{ width: '18rem' }} className='shadow text-center'>
            <Card.Header className="lead">{props.ubicacion}, {props.pais}</Card.Header>
            <Card.Body>
                <Card.Title className='display-4 text-warning'>{props.objetoclima.temp}°C</Card.Title>
                <Card.Text>
                    Sensación Térmica: {props.objetoclima.feels_like}°C
                    <br></br>
                    Mín: {props.objetoclima.temp_min}°C
                    <br></br>
                    Max: {props.objetoclima.temp_max}°C
                    <br></br>
                    Presión: {props.objetoclima.pressure} hPa
                </Card.Text>
            </Card.Body>
        </Card>
        </section>
    );
};

export default MuestraClima;
