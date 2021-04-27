import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import MuestraClima from './MuestraClima';
// import {Spinner} from './Spinner'


import{ Alert,Form,Button} from "react-bootstrap";

const FormClima = () => {
    // clima
    const [clima, setClima] = useState({});
    const [ubicacion, setUbicacion] = useState('San Miguel de Tucumán');
    const [pais, setPais] = useState('Argentina');
    // spinner
    const [cargando, setCargando] = useState(false);

    // codigo de error de api
    const [errorApi,setErrorApi] = useState();
    
    useEffect(()=>{
        consultarAPI();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        consultarAPI();
    }

    const consultarAPI = async () => {
        // mostrar spinner
        setCargando(true);
        // consulta a API
        const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&country=${pais}&lang=es&units=metric&APPID=e2040a955c1c51f570569f5248e829b9`);
        
        // extraigo del resultado de la API, sólo el atributo MAIN 
        const {main,cod} = await respuesta.json();
        
        // const {main,name,sys} = await respuesta.json();
        // console.log(main);
        // console.log(name);
        // console.log(sys);
        // const climaapi = {temp:main,ciudad:name,pais:sys}
        setTimeout(()=>{
            console.log(main);
            setClima(main);
            console.log("cod de error API:"+cod);
            setErrorApi(cod);
            setCargando(false);
        },3000);
    };
    
    // const mostrarComponente = (cargando === true)?(<Spinner></Spinner>):(<Frase personaje={personaje}></Frase>)

    // const mostrarSpinner = (cargando === true)?(<Spinner></Spinner>):(null)
    const mostrarComponente = (clima) ? (<MuestraClima ubicacion={ubicacion} pais={pais} objetoclima={clima}></MuestraClima>) : (<Alert variant='warning'>Error en los datos</Alert>)
    
    // const mostrarComponente = (errorApi===200) ? (<MuestraClima ubicacion={ubicacion} pais={pais} objetoclima={clima}></MuestraClima>) : (<Alert variant='warning'>Error en los datos</Alert>)

    return (
    <Fragment>
        <section className="container shadow text-center py-3 w-75">
            <Form className="mx-5 text-center" onSubmit={handleSubmit}>
                <div className="my-3 d-flex">
                    <label className="form-label lead fw-bold">Ubicación:</label>
                    <input type='text'className="form-control lead fw-bold ml-2"  onChange={(e) => setUbicacion(e.target.value)}></input>
                </div>
                <div className="my-3 d-flex">
                    <label className="form-label lead fw-bold">País:</label>
                    <input type='text'className="form-control lead fw-bold ml-2"  onChange={(e) => setPais(e.target.value)}></input>
                </div>
                <Button variant='warning' className='mb-4' type='submit'>Consultar Clima</Button>
            </Form>    

            <section>
            {/* {  
                mostrarSpinner
            } */}
            {
                mostrarComponente
            }
            
            </section>
            
        </section>
            
    </Fragment>
    );
};

export default FormClima;
