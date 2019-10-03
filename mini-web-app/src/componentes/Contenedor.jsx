import React, { Component } from 'react';
import '../css/contenedor.css';
import buscar from '../img/buscar.png';

import Perfil from './Perfil';

class Contenedor extends Component {
  constructor(props){
    super(props);

    this.handlerMostrar = this.handlerMostrar.bind(this);
  }

  handlerMostrar(count){
    this.props.onMostrar(count);
  }

  render(){
    let tamano = { width: '25px', height: '25px', background: '#FFFFFF', borderRadius: '50%' };

    return (
      <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 contenedor sinpadding">
        <Perfil onMostrar={this.handlerMostrar} onLateral={this.props.onLateral} />
        <div className="row align-items-center sinmargin mt-3">
          <div className="col-12 col-md-12 col-md-12 col-lg-6 col-xl-6 mt-3">
            <h2>Listado segmentos</h2>
          </div>
          <div className="col-6 col-md-6 col-md-6 col-lg-3 col-xl-3 mt-3 d-flex justify-content-center">
            <a href="#?" className="nuevosegmento">NUEVO SEGMENTO</a>
          </div>
          <form className="col-6 col-md-6 col-md-6 col-lg-3 col-xl-3 mt-3 d-flex justify-content-center">
            <input type="text" id="buscar" name="buscar" placeholder="Buscar" className="mr-1" />
            <button><img src={buscar} style={tamano} /></button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contenedor;
