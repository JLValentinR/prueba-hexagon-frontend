import React, { Component } from 'react';
import '../css/principal.css';

import Lateral from './Lateral';
import Contenedor from './Contenedor';
import Nuevo from './Nuevo';

class Principal extends Component {
  constructor(props){
    super(props);
    this.state = {
      lateral: false,
      validador: 2,
      nuevosegmento: 'none',
      actualiza: 0,
    }

    this.handlerMostrar = this.handlerMostrar.bind(this);
    this.handlerNuevo = this.handlerNuevo.bind(this);
    this.handlerActualiza = this.handlerActualiza.bind(this);
  }

  handlerMostrar(count){
    let parsejson = JSON.parse(count);
    this.setState({
      lateral: parsejson.lateral,
      validador: 1
    });
  }

  handlerNuevo(count, validador){
    this.setState({
      nuevosegmento: count,
      validador: validador
    });
  }

  handlerActualiza(count){
    this.setState({
      actualiza: count
    });
  }

  render(){
    return (
      <div className="container-fluid principal">
        <div className="row">
          <Lateral onLateral={this.state.lateral} onValidador={this.state.validador} />
          <Contenedor onMostrar={this.handlerMostrar} onLateral={this.state.lateral} onNuevo={this.handlerNuevo} onActualiza={this.state.actualiza} onValidador={this.state.validador} />
          <Nuevo onNuevo={this.state.nuevosegmento} onCerrar={this.handlerNuevo} onActualiza={this.handlerActualiza} />
        </div>
      </div>
    );
  }
}

export default Principal;
