import React, { Fragment } from 'react';
import { useEffect,useState } from "react";
import MuestraClima from './MuestraClima';
import Spinner from "./Spinner";

const FormClima = () => {
    // guarda respuesta de la API
    const [Clima, setClima] = useState({});

    const [ubicacion, setUbicacion] = useState('San Miguel de Tucuman');
    const [pais, setPais] = useState('Argentina');
    const [cargando, setCargando] = useState(false);

    // useEffect(() => {consultarAPI();}, [ubicacion,pais]);
    useEffect(() => {consultarAPI();}, [pais]);

    const consultarAPI = async () => {
        console.log("en consultar API")
        // mostrar spinner
        setCargando(true);
        // consulta a API
        const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&country=${pais}&lang=es&units=metric&APPID=e2040a955c1c51f570569f5248e829b9`);
        
        // como pregunto si respuesta es distinta de ERROR???????

        // extraigo del resultado de la API, sólo el atributo MAIN 
        const {main} = await respuesta.json();
        console.log(main);
        // const {main,name,sys} = await respuesta.json();
        // console.log(main);
        // console.log(name);
        // console.log(sys);
        // const climaapi = {temp:main,ciudad:name,pais:sys}

        // const resultado = await respuesta.json();
        // console.log('Resultado:'+ resultado);
        // console.log(resultado);
        // console.log(resultado.main);
        // console.log(resultado.sys.country);
        // console.log(resultado.wheater.description);
        
        // para que muestre un poco mas de tiempo el spinner se usa settimeout
        setTimeout(() => {
            setClima(main);
            // setClima(climaapi);
            setCargando(false);
        }, 3000);
    };
    
      //operador ternario: alternativa a un IF (se usa cuando es una linea corta)
      // (condicion logica)?(lo que quiero que haga si es true la condicion):(lo que quiero que suceda si es false)
    const mostrarComponente = (cargando === true) ? (<Spinner></Spinner>) : (<MuestraClima ubicacion={ubicacion} pais={pais} objetoclima={Clima}></MuestraClima>);
    
    return (
        <Fragment>
        <section className="container shadow text-center py-3 w-75">
            <form className="mx-5 text-center">
                <div className="my-3 d-flex">
                    <label className="form-label lead fw-bold">Ubicación:</label>
                    <input type='text'className="form-control lead fw-bold ml-2"  onChange={(e) => setUbicacion(e.target.value)}></input>
                </div>
                <div className="my-3 d-flex">
                    <label className="form-label lead fw-bold">País:</label>
                    <input type='text'className="form-control lead fw-bold ml-2"  onChange={(e) => setPais(e.target.value)}></input>
                </div>
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