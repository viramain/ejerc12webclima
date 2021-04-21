

import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormClima from './components/FormClima';

function App() {
  return (
    <Fragment>
        <section className="container my-3 border border-4 bg-secondary">
          <h1 className='display-4 text-light text-center my-3'>Web del Clima</h1>
        </section>
        <FormClima></FormClima>
    </Fragment>
  );
}

export default App;
