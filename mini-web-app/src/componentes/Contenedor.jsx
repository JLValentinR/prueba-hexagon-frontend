import React, { Component } from 'react';
import '../css/contenedor.css';
import buscar from '../img/buscar.png';

import flechas from '../img/flechas.png';

import Perfil from './Perfil';
import Favoritos from './Favoritos';
import Completados from './Completados';
import Error from './Error';
import Proceso from './Proceso';

const { favoritos } = { "favoritos": [] };
const { completados } = { "completados": [] };
const { errores } = { "errores": [] };
const { procesos } = { "procesos": [] };

class Contenedor extends Component {
  constructor(props){
    super(props);

    this.state = {
      mostrar: "col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 contenedor sinpadding",
      buscar: "",
      favoritos,
      completados,
      errores,
      procesos,
      btnanterior: '',
      cambio1: 'block',
      cambio2: 'none',
      cambio3: 'none',
      btn1: { marginBottom: '0px', padding: '10px', borderBottom: '4px solid green' },
      btn2: { marginBottom: '0px', padding: '10px', border: '0' },
      btn3: { marginBottom: '0px', padding: '10px', border: '0' }
    }

    this.handlerMostrar = this.handlerMostrar.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSegmentos = this.handlerSegmentos.bind(this);
    this.handlerCambiar = this.handlerCambiar.bind(this);
    this.handlerPeticion = this.handlerPeticion.bind(this);
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

  componentDidMount(){
    this.handlerPeticion("/api/buscar/", this.state.buscar, 1, 0, this.handlerSegmentos, 'favoritos');
    this.handlerPeticion("/api/buscar/", this.state.buscar, 2, 1, this.handlerSegmentos, 'completados');
    this.handlerPeticion("/api/buscar/", this.state.buscar, 2, 2, this.handlerSegmentos, 'errores');
    this.handlerPeticion("/api/buscar/", this.state.buscar, 2, 3, this.handlerSegmentos, 'procesos');
  }

  handlerChange(e){
    const {value} = e.target;

    this.setState({
      buscar: value.replace(/(<([^>]+)>)/ig, '')
    });

    this.handlerPeticion("/api/buscar/", value.replace(/(<([^>]+)>)/ig, ''), 1, 0, this.handlerSegmentos, 'favoritos');
    this.handlerPeticion("/api/buscar/", value.replace(/(<([^>]+)>)/ig, ''), 2, 1, this.handlerSegmentos, 'completados');
    this.handlerPeticion("/api/buscar/", value.replace(/(<([^>]+)>)/ig, ''), 2, 2, this.handlerSegmentos, 'errores');
    this.handlerPeticion("/api/buscar/", value.replace(/(<([^>]+)>)/ig, ''), 2, 3, this.handlerSegmentos, 'procesos');
  }

  handlerPeticion(url, palabra, numero, tipo, funcion, objeto){
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ palabra: palabra, numero: numero, tipo: tipo }),  
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => funcion(response, objeto))
    .catch(error => console.error('Error:', error));
  }

  handlerSegmentos(response, objeto){
    if(response[0].nombre != '' && response[0].nombre != ' '){
      this.setState({
        [objeto]: [...response]
      });
    }else{
      this.setState({
        [objeto]: [...favoritos]
      });
    }
  }

  handlerCambiar(e, a){
    if(a == 'btn1'){
      this.setState({
        btn1: { marginBottom: '0px', padding: '10px', borderBottom: '4px solid green' },
        btn2: { marginBottom: '0px', padding: '10px', border: '0' },
        btn3: { marginBottom: '0px', padding: '10px', border: '0' },
        cambio1: "block",
        cambio2: "none",
        cambio3: "none"
      })
    }else if(a == 'btn2'){
      this.setState({
        btn1: { marginBottom: '0px', padding: '10px', border: '0' },
        btn2: { marginBottom: '0px', padding: '10px', borderBottom: '4px solid red' },
        btn3: { marginBottom: '0px', padding: '10px', border: '0' },
        cambio1: "none",
        cambio2: "block",
        cambio3: "none"
      })
    }else if(a == 'btn3'){
      this.setState({
        btn1: { marginBottom: '0px', padding: '10px', border: '0' },
        btn2: { marginBottom: '0px', padding: '10px', border: '0' },
        btn3: { marginBottom: '0px', padding: '10px', borderBottom: '4px solid orange' },
        cambio1: "none",
        cambio2: "none",
        cambio3: "block"
      })
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
          <form className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mt-3 d-flex justify-content-center" autoComplete="off">
            <input type="text" id="buscar" name="buscar" placeholder="Buscar" value={this.state.buscar} className="mr-1" style={{ fontStyle: 'italic' }} onChange={this.handlerChange} />
            <button><img src={buscar} style={tamano} /></button>
          </form>
        </div>
        <div className="row titulofavoritos align-items-center margin25 sinmargin mt-3">
          <h4 className="pl-3">Favoritos</h4><div className="pl-3">Puedes tener un máximo de 3 items en esta lista.</div>
        </div>
        <Favoritos onFavoritos={this.state.favoritos} />
        <div id="segmentos" className="row align-items-center margin25 mt-3">
          <a href="#segmentos" style={this.state.btn1} className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 mt-3 opciones" onClick={(e) => {this.handlerCambiar(e, 'btn1')}}><h4>Completado</h4></a>
          <a href="#segmentos" style={this.state.btn2} className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 mt-3 opciones" onClick={(e) => {this.handlerCambiar(e, 'btn2')}}><h4>Error</h4></a>
          <a href="#segmentos" style={this.state.btn3} className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 mt-3 opciones" onClick={(e) => {this.handlerCambiar(e, 'btn3')}}><h4>Proceso</h4></a>
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
        <Completados onCompletados={this.state.completados} onStyle={this.state.cambio1} />
        <Error onError={this.state.errores} onStyle={this.state.cambio2} />
        <Proceso onProceso={this.state.procesos} onStyle={this.state.cambio3} />
      </div>
    );
  }
}

export default Contenedor;
