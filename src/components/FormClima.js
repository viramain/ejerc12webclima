import React, { Fragment } from 'react';
import { useEffect,useState } from "react";
import MuestraClima from './MuestraClima';
import Spinner from "./Spinner";
import Button from 'react-bootstrap/Button';

const FormClima = () => {
    const [Clima, setClima] = useState({});
    const [ubicacion, setUbicacion] = useState('Salta');
    const [pais, setPais] = useState('Argentina');
    const [cargando, setCargando] = useState(false);

    useEffect(() => {consultarAPI();}, [ubicacion,pais]);
    // useEffect(() => {consultarAPI();}, []);

    const consultarAPI = async () => {
        console.log("en consultar API")
        // mostrar spinner
        setCargando(true);
        // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e2040a955c1c51f570569f5248e829b9
    
        const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ubicacion+','+pais}&lang=es&units=metric&APPID=e2040a955c1c51f570569f5248e829b9`);
        // extraigo del resultado de la API, sólo el atributo MAIN 
        const {main} = await respuesta.json();
        console.log(main);

        // const resultado = await respuesta.json();
        // console.log(resultado[0]);
        
        // para que muestre un poco mas de tiempo el spinner se usa settimeout
        setTimeout(() => {
            setClima(main);
            // setClima(resultado);
            setCargando(false);
        }, 3000);
    };
    
      //operador ternario: alternativa a un IF (se usa cuando es una linea corta)
      // (condicion logica)?(lo que quiero que haga si es true la condicion):(lo que quiero que suceda si es false)
    const mostrarComponente = (cargando === true) ? (<Spinner></Spinner>) : (<MuestraClima ubicacion={ubicacion} pais={pais} objetoclima={Clima}></MuestraClima>);
    
    return (
        <Fragment>
        <section className="container shadow text-center py-3 w-75">
            <form className="mx-5 text-center" onSubmit={consultarAPI}>
                <div className="my-3 d-flex">
                    <label className="form-label lead fw-bold">Ubicación:</label>
                    <input type='text'className="form-control lead fw-bold ml-2" onChange={(e) => setUbicacion(e.target.value)}></input>
                </div>
                <div className="my-3 d-flex">
                    <label className="form-label lead fw-bold">País:</label>
                    <input type='text'className="form-control lead fw-bold ml-2" onChange={(e) => setPais(e.target.value)}></input>
                </div>
                
                <Button variant="secondary" type='submit' block className='mb-3'>
                    Consultar
                </Button>
            </form>    
        </section>

        <section>
            {
            mostrarComponente
            }
        </section>
        </Fragment>
    );
};

export default FormClima;