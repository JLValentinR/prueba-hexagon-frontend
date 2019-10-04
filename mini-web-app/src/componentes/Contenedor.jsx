import React, { Component } from 'react';
import '../css/contenedor.css';
import buscar from '../img/buscar.png';

import flechas from '../img/flechas.png';

import Perfil from './Perfil';
import Favoritos from './Favoritos';
import Completados from './Completados';

class Contenedor extends Component {
  constructor(props){
    super(props);

    this.state = {
      mostrar: "col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 contenedor sinpadding"
    }

    this.handlerMostrar = this.handlerMostrar.bind(this);
  }

  handlerMostrar(count){
    this.props.onMostrar(count);
  }

  componentWillReceiveProps(props){
    if(this.props.onLateral){
      this.setState({
        mostrar: "col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 contenedor sinpadding"
      });
    }else{
      this.setState({
        mostrar: "col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 contenedorhidden sinpadding"
      });
    }
  }

  render(){
    let tamano = { width: '25px', height: '25px', background: '#FFFFFF', borderRadius: '50%' };

    return (
      <div className={this.state.mostrar}>
        <Perfil onMostrar={this.handlerMostrar} onLateral={this.props.onLateral} />
        <div className="row align-items-center margin25 sinmargin mt-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3">
            <h2>Listado segmentos</h2>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mt-3 d-flex justify-content-center">
            <a href="#?" className="nuevosegmento">NUEVO SEGMENTO</a>
          </div>
          <form className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mt-3 d-flex justify-content-center">
            <input type="text" id="buscar" name="buscar" placeholder="Buscar" className="mr-1" style={{ fontStyle: 'italic' }} />
            <button><img src={buscar} style={tamano} /></button>
          </form>
        </div>
        <div className="row titulofavoritos align-items-center margin25 sinmargin mt-3">
          <h4 className="pl-3">Favoritos</h4><div className="pl-3">Puedes tener un máximo de 3 items en esta lista.</div>
        </div>
        <Favoritos />
        <div className="row align-items-center margin25 mt-3">
          <h4 className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 mt-3" style={{ marginBottom: '0px', padding: '10px', textAlign: 'center', borderBottom: '3px solid #79BE4E' }}>Completado</h4>
          <h4 className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 mt-3" style={{ marginBottom: '0px', padding: '10px', textAlign: 'center' }}>Error</h4>
          <h4 className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 mt-3" style={{ marginBottom: '0px', padding: '10px', textAlign: 'center' }}>Proceso</h4>
        </div>
        <div className="row align-items-center margin25" style={{ padding: '10px', fontWeight: 'bold', fontSize: '0.8em', background: '#C6E1B1'}}>
          <a href="#?" className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding"></a>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-3 mb-3 sinpadding">
            <div className="row align-items-center sinmargin">
              Nombre del archivo <img src={flechas} style={{ width: '12px', height: '12px', marginLeft: '10px' }} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 mt-3 mb-3 sinpadding">
            <div className="row align-items-center sinmargin">
              Match rate <img src={flechas} style={{ width: '12px', height: '12px', marginLeft: '10px' }} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 mt-3 mb-3 sinpadding">
            <div className="row align-items-center sinmargin">
              Fecha subida <img src={flechas} style={{ width: '12px', height: '12px', marginLeft: '10px' }} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 mt-3 mb-3 sinpadding">
            <div className="row align-items-center sinmargin">
              Fecha de actualización <img src={flechas} style={{ width: '12px', height: '12px', marginLeft: '10px' }} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 sinpadding"></div>
        </div>
        <Completados />
      </div>
    );
  }
}

export default Contenedor;
