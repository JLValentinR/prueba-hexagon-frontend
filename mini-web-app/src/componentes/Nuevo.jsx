import React, { Component } from 'react';
import '../css/nuevo.css';

import ficono3 from '../img/ficono3.png';
import ver from '../img/ver.jpg';
import opciones from '../img/opciones.png';

const { errores } = { "errores": [] };

let x = 1;

function fecha(params){
  if (params < 10) {
    params = '0' + params;
  }
  return params;
}

function _xuma(a){ return document.getElementById(a); }

class Nuevo extends Component {
  constructor(props){
    super(props);

    this.state = {
      snombre: '',
      sdescripcion: '',
      smatch: '',
      stipo: 1,
      mensaje: ''
    }

    this.handlerGuardar = this.handlerGuardar.bind(this);
    this.handlerCerrar = this.handlerCerrar.bind(this);
    this.handlerChangeInput = this.handlerChangeInput.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  componentWillReceiveProps(props){
  }

  handlerGuardar(e){
    e.preventDefault();

    fetch("/api/guardar/", {
      method: 'POST',
      body: JSON.stringify({ snombre: this.state.snombre, sdescripcion: this.state.sdescripcion, smatch: this.state.smatch, stipo: this.state.stipo }),  
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => this.handlerResponse(response))
    .catch(error => console.error('Error:', error));

    this.props.onActualiza(1);
  }

  handlerCerrar(){
    this.props.onCerrar('none', 2);
  }

  handlerResponse(response){
    if(response[0].estado){
      this.setState({
        snombre: '',
        sdescripcion: '',
        smatch: '',
        mensaje: response[0].mensaje
      });
    }else{
      this.setState({
        mensaje: response[0].mensaje
      });
    }
  }

  handlerChangeInput(e){
    const {value, name} = e.target;
    var contensform = value;
    var contensformsimple = contensform.replace(/(<([^>]+)>)/ig, '');

    this.setState({
      [name]: contensformsimple
    });
  }

  handleChangeSelect(e) {
    var contensform = e.target.value;
    var contensformsimple = contensform.replace(/(<([^>]+)>)/ig, '');

    this.setState({stipo: contensformsimple});
  }

  render(){
    let tamano = { width: '25px', height: '25px', background: '#FFFFFF', borderRadius: '50%' };
    return (
      <div className="row fondonuevo sinmargin" style={{ display: this.props.onNuevo }}>
        <div className="col-12 sinpadding">
          <div className="fondoopaco"></div>
          <div className="row modalnuevo sinmargin p-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-5 fondoblanco sinpadding">
              <div className="row align-items-center barratitulo sinmargin">
                <div className="col-12">
                  <div style={{ float: 'left', fontSize: '1.2em', color: '#FFFFFF', fontWeight: 'bold' }}>Nuevo segmento</div>
                  <a href="#?" onClick={this.handlerCerrar} className="opciones" style={{ float: 'right', color: '#FF0000', fontWeight: 'bold' }}>Cerrar</a>
                </div>
              </div>
              <form onSubmit={this.handlerGuardar} className="row sinmargin" autoComplete="off">
                <div className="col-12 p-3">
                  <br />
                  <label>Ingresa un nombre</label>
                  <br />
                  <input type="text" id="snombre" name="snombre" className="sinput" placeholder="nombre" value={this.state.snombre} onChange={this.handlerChangeInput} />
                  <br /><br />
                  <label>Ingresa una descripción</label>
                  <br />
                  <input type="text" id="sdescripcion" name="sdescripcion" className="sinput" value={this.state.sdescripcion} placeholder="descripción" onChange={this.handlerChangeInput} />
                  <br /><br />
                  <label>Ingresa un match</label>
                  <br />
                  <input type="text" id="smatch" name="smatch" className="sinput" placeholder="match" value={this.state.smatch} onChange={this.handlerChangeInput} />
                  <br /><br />
                  <label>Selecciona un tipo</label>
                  <select id="stipo" name="stipo" value={this.state.stipo} className="custom-select shares" onChange={this.handlerChangeInput}>
                      <option value="1">Completado</option>
                      <option value="2">Error</option>
                      <option value="3">Proceso</option>
                  </select>
                  <br /><br />
                  <div style={{ padding: '10px', color: '#FF0000', textAlign: 'center' }}>{this.state.mensaje}</div>
                  <br />
                  <button type="submit" className="sguardar">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nuevo;

